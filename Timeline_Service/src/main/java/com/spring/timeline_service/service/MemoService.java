package com.spring.timeline_service.service;

import com.spring.timeline_service.domain.Memo;
import com.spring.timeline_service.domain.MemoRepository;
import com.spring.timeline_service.domain.MemoRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class MemoService {
    private final MemoRepository memoRepository;

    @Transactional
    public Long update(Long id, MemoRequestDto memoRequestDto) {
        Memo memo = memoRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        memo.update(memoRequestDto);
        return memo.getId();
    }
}
