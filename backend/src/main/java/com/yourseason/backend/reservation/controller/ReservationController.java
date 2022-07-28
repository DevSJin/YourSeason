package com.yourseason.backend.reservation.controller;

import com.yourseason.backend.common.domain.Message;
import com.yourseason.backend.reservation.controller.dto.ReservationCreateRequest;
import com.yourseason.backend.reservation.controller.dto.ReservationCreateResponse;
import com.yourseason.backend.reservation.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @PostMapping("/{consultantId}")
    public ResponseEntity<ReservationCreateResponse> createReservation(@PathVariable Long consultantId,
                                                                       @RequestBody ReservationCreateRequest reservationCreateRequest) {
        return ResponseEntity.ok()
                .body(reservationService.createReservation(0L, consultantId, reservationCreateRequest));
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity<Message> deleteReservation(@PathVariable Long reservationId) {
        return ResponseEntity.ok()
                .body(reservationService.deleteReservation(0L, reservationId));
    }
}
