package com.yourseason.backend.consulting.controller;

import com.yourseason.backend.consulting.controller.dto.ConsultingCreateResponse;
import com.yourseason.backend.consulting.controller.dto.ConsultingJoinRequest;
import com.yourseason.backend.consulting.controller.dto.ConsultingJoinResponse;
import com.yourseason.backend.consulting.service.ConsultingService;
import com.yourseason.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/consultings")
public class ConsultingController {

    private final ConsultingService consultingService;

    @PostMapping
    public ResponseEntity<ConsultingCreateResponse> createConsulting(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok()
                .body(consultingService.createConsulting(JwtUtil.getMemberId(token)));
    }

    @PostMapping("/join")
    public ResponseEntity<ConsultingJoinResponse> joinConsulting(@RequestHeader("Authorization") String token, @RequestBody ConsultingJoinRequest consultingJoinRequest) {
        return ResponseEntity.ok()
                .body(consultingService.joinConsulting(JwtUtil.getMemberId(token), consultingJoinRequest));
    }
}
