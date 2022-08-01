package com.yourseason.backend.consulting.domain.result;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.common.domain.ColorSet;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "worst_color_set_id"))
@Entity
public class WorstColorSet extends BaseTimeEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "color_set_id")
    private ColorSet colorSet;

    @Builder
    public WorstColorSet(Long id, LocalDateTime createdTime, LocalDateTime lastModifiedTime, LocalDateTime deletedDate, boolean isActive, ColorSet colorSet) {
        super(id, createdTime, lastModifiedTime, deletedDate, isActive);
        this.colorSet = colorSet;
    }
}
