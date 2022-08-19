package com.yourseason.backend.consulting.self.domain.result;

import com.yourseason.backend.common.domain.Tone;
import com.yourseason.backend.consulting.common.domain.BestColorSet;
import com.yourseason.backend.consulting.common.domain.Result;
import com.yourseason.backend.consulting.common.domain.WorstColorSet;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "self_consulting_result_id"))
@Entity
public class SelfConsultingResult extends Result {

    @OneToMany(mappedBy = "selfConsultingResult", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Percentage> percentages = new ArrayList<>();

    @Builder
    public SelfConsultingResult(Long id, LocalDateTime createdDate, LocalDateTime lastModifiedDate, LocalDateTime deletedDate,
                                BestColorSet bestColorSet, WorstColorSet worstColorSet, Tone tone, List<Percentage> percentages) {
        super(id, createdDate, lastModifiedDate, deletedDate, bestColorSet, worstColorSet, tone);
        setPercentages(percentages);
    }

    private void setPercentages(List<Percentage> percentages) {
        this.percentages = percentages;
        percentages.forEach(percentage -> percentage.addSelfConsultingResult(this));
    }
}
