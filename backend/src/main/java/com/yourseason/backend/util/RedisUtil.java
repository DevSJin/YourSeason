package com.yourseason.backend.util;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.Duration;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class RedisUtil {

    @Autowired
    private StringRedisTemplate redisTemplate;

    private static StringRedisTemplate staticRedisTemplate;

    @PostConstruct
    private void initStatic() {
        staticRedisTemplate = this.redisTemplate;
    }

    public static String getData(String key) {
        ValueOperations<String, String> valueOperations = staticRedisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    public static void setDataExpired(String key, String value, long duration) {
        ValueOperations<String, String> valueOperations = staticRedisTemplate.opsForValue();
        Duration expireDuration = Duration.ofSeconds(duration);
        valueOperations.set(key, value, expireDuration);
    }

    public static boolean validateData(String key, String value) {
        if (getData(key).equals(value)) {
            return true;
        }
        return false;
    }
}
