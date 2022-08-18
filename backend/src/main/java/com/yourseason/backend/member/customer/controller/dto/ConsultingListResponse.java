package com.yourseason.backend.member.customer.controller.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ConsultingListResponse {

    private Long consultantId;
    private Long consultingId;
    private String consultantNickname;
    private String consultantImageUrl;
    private LocalDate consultingDate;
    private String tone;
    private List<String> bestColorSet;
    private List<String> worstColorSet;
    private byte[] consultingFile;
    private String comment;
    private boolean hasReview;
}
