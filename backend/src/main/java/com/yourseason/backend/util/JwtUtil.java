package com.yourseason.backend.util;

import com.yourseason.backend.member.common.domain.Member;
import com.yourseason.backend.member.common.domain.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class JwtUtil {

    private static final String SECRET = "yourseason";

    public static String generateToken(Map<String, String> member) {
        Claims claims = Jwts.claims();
        claims.put("id", member.get("id"));
        claims.put("nickname", member.get("nickname"));
        claims.put("imageUrl", member.get("imageUrl"));
        claims.put("role", member.get("role"));
        return createToken(claims);
    }

    public static Boolean isValidToken(String token, Member member, Role role) {
        Long id = getMemberId(token);
        String imageUrl = getImageUrl(token);
        String nickname = getNickname(token);
        String roleFromToken = getRole(token);
        return id.equals(member.getId()) && nickname.equals(member.getNickname())
                && imageUrl.equals(member.getImageUrl()) && roleFromToken.equals(role)
                && !isTokenExpired(token);
    }

    public static Long getMemberId(String token) {
        return (Long) getAllClaims(token).get("id");
    }

    private static String getImageUrl(String token) {
        return String.valueOf(getAllClaims(token).get("imageUrl"));
    }

    private static String getNickname(String token) {
        return String.valueOf(getAllClaims(token).get("nickname"));
    }

    private static String getRole(String token) {
        return String.valueOf(getAllClaims(token).get("role"));
    }

    private static String createToken(Claims claims) {
        return Jwts.builder()
                .setSubject("X-Auth-Token")
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET.getBytes(StandardCharsets.UTF_8))
                .compact();
    }

    private static Claims getAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET.getBytes(StandardCharsets.UTF_8))
                .parseClaimsJws(token)
                .getBody();
    }

    private static boolean isTokenExpired(String token) {
        return getExpirationDate(token).before(new Date());
    }

    private static Date getExpirationDate(String token) {
        Claims claims = getAllClaims(token);
        return claims.getExpiration();
    }
}
