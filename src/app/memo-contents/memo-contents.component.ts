import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo-contents',
  templateUrl: './memo-contents.component.html',
  styleUrls: ['./memo-contents.component.scss'],
})
export class MemoContentsComponent implements OnInit {
  memoId: string; // MemoServiceでmemoIdからMemoをとってくる(memoIdのいれもの)
  memo$: Observable<Memo>;
  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService
  ) {}

  ngOnInit(): void {
    this.memo$ = this.route.paramMap.pipe(
      switchMap((param) => {
        const id = param.get('id');
        this.memoId = id;
        return this.memoService.getMemo(id);
      })
    );
  }
  like(): void {
    alert('like!');
  }
}
