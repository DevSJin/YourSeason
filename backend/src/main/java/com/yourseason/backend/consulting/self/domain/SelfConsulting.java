package com.yourseason.backend.consulting.self.domain;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.consulting.self.domain.result.SelfConsultingResult;
import com.yourseason.backend.member.customer.domain.Customer;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "self_consulting_id"))
@Entity
public class SelfConsulting extends BaseTimeEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "self_consulting_result_id")
    private SelfConsultingResult selfConsultingResult;

    private String sessionId;

    @Builder
    public SelfConsulting(Long id, LocalDateTime createdDate, LocalDateTime lastModifiedDate, LocalDateTime deletedDate,
                          Customer customer, SelfConsultingResult selfConsultingResult, String sessionId) {
        super(id, createdDate, lastModifiedDate, LocalDateTime.now(), false);
        this.customer = customer;
        this.selfConsultingResult = selfConsultingResult;
        this.sessionId = sessionId;
    }

    public void enterCustomer(Customer customer) {
        this.customer = customer;
    }
}
