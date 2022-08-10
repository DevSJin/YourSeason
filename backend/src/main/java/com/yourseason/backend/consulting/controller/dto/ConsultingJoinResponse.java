package com.yourseason.backend.consulting.controller.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ConsultingJoinResponse {

    private String sessionId;
}
