package com.yourseason.backend.member.consultant.controller;

import com.yourseason.backend.common.domain.Message;
import com.yourseason.backend.member.common.controller.dto.PasswordUpdateRequest;
import com.yourseason.backend.member.consultant.controller.dto.*;
import com.yourseason.backend.member.consultant.service.ConsultantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/consultants")
public class ConsultantController {

    private final ConsultantService consultantService;

    @PostMapping
    public ResponseEntity<Message> signup(@RequestBody ConsultantSignupRequest consultantSignupRequest) {
        consultantService.createConsultant(consultantSignupRequest);
        return ResponseEntity.created(URI.create("/login"))
                .body(new Message("succeeded"));
    }

    @GetMapping
    public ResponseEntity<List<ConsultantListResponse>> getConsultants() {
        return ResponseEntity.ok()
                .body(consultantService.getConsultants());
    }

    @GetMapping("/{consultantId}/1")
    public ResponseEntity<ConsultantResponse> getConsultant(@PathVariable Long consultantId) {
        return ResponseEntity.ok()
                .body(consultantService.getConsultant(consultantId));
    }

    @GetMapping("/{consultantId}/2")
    public ResponseEntity<List<ReviewListResponse>> getReviews(@PathVariable Long consultantId) {
        return ResponseEntity.ok()
                .body(consultantService.getReviews(consultantId));
    }

    @GetMapping("/1")
    public ResponseEntity<ConsultantReservationResponse> getMyReservations() {
        return ResponseEntity.ok()
                .body(consultantService.getMyReservations(1L));
    }

    @GetMapping("/2")
    public ResponseEntity<ConsultantReviewResponse> getMyReviews() {
        return ResponseEntity.ok()
                .body(consultantService.getMyReviews(1L));
    }

    @GetMapping("/3")
    public ResponseEntity<ConsultantInfoResponse> getConsultantInfo() {
        return ResponseEntity.ok()
                .body(consultantService.getConsultantInfo(0L));
    }

    @PatchMapping
    public ResponseEntity<Message> updateConsultant(@RequestBody ConsultantUpdateRequest consultantUpdateRequest) {
        return ResponseEntity.ok()
                .body(consultantService.updateConsultant(1L, consultantUpdateRequest));
    }

    @PatchMapping("/password")
    public ResponseEntity<Message> updateConsultantPassword(@RequestBody PasswordUpdateRequest passwordUpdateRequest) {
        return ResponseEntity.ok()
                .body(consultantService.updateConsultantPassword(0L, passwordUpdateRequest));
    }

    @DeleteMapping
    public ResponseEntity<Message> deleteConsultant() {
        return ResponseEntity.ok()
                .body(consultantService.deleteConsultant(1L));
    }
}
