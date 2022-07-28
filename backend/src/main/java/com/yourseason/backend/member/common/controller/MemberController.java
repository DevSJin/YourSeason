package com.yourseason.backend.member.common.controller;

import com.yourseason.backend.common.domain.Message;
import com.yourseason.backend.member.common.controller.dto.LoginRequest;
import com.yourseason.backend.member.common.controller.dto.LoginResponse;
import com.yourseason.backend.member.common.service.MemberService;
import com.yourseason.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok()
                .header("X-Auth-Token", JwtUtil.generateToken(memberService.getMember(loginRequest)))
                .body(memberService.login(loginRequest));
    }

    @GetMapping("/validation/1")
    public ResponseEntity<Message> validateEmail(@RequestParam String email) {
        memberService.validateEmail(email);
        return ResponseEntity.ok()
                .body(new Message("succeeded"));
    }

    @GetMapping("/validation/2")
    public ResponseEntity<Message> validateNickname(@RequestParam String nickname) {
        memberService.validateNickname(nickname);
        return ResponseEntity.ok()
                .body(new Message("succeeded"));
    }
}
