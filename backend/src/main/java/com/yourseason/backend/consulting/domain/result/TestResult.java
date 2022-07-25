package com.yourseason.backend.consulting.domain.result;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.common.domain.Tone;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "test_result_id"))
@Entity
public class TestResult extends BaseTimeEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "best_color_set_id")
    private BestColorSet bestColorSet;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "worst_color_set_id")
    private WorstColorSet worstColorSet;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tone_id")
    private Tone tone;

    private String consultingFile;

    @Builder
    public TestResult(Long id, LocalDateTime createdTime, LocalDateTime lastModifiedTime, LocalDateTime deletedDate, boolean isActive,
                      BestColorSet bestColorSet, WorstColorSet worstColorSet, Tone tone, String consultingFile) {
        super(id, createdTime, lastModifiedTime, deletedDate, isActive);
        this.bestColorSet = bestColorSet;
        this.worstColorSet = worstColorSet;
        this.tone = tone;
        this.consultingFile = consultingFile;
    }
}
