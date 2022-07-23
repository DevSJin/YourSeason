package com.yourseason.backend.member.controller;

import com.yourseason.backend.common.exception.DuplicateEmailException;
import com.yourseason.backend.common.exception.DuplicateNicknameException;
import com.yourseason.backend.member.customer.controller.Message;
import com.yourseason.backend.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/validation")
    public ResponseEntity<Message> validateEmail(@RequestParam String email) {
        memberService.validateEmail(email);
        return ResponseEntity.ok()
                .body(new Message("succeeded"));
    }

    @GetMapping("/validation")
    public ResponseEntity<Message> validateNickname(@RequestParam String nickname) {
        memberService.validateNickname(nickname);
        return ResponseEntity.ok().
                body(new Message("succeeded"));
    }
}
