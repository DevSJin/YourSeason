package com.yourseason.backend.consulting.domain.result;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.common.domain.ColorSet;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "best_color_set_id"))
@Entity
public class BestColorSet extends BaseTimeEntity {

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "color_set_id")
    private ColorSet colorSet;

    @Builder
    public BestColorSet(Long id, LocalDateTime createdTime, LocalDateTime lastModifiedTime, LocalDateTime deletedDate, ColorSet colorSet) {
        super(id, createdTime, lastModifiedTime, deletedDate, true);
        this.colorSet = colorSet;
    }
}
