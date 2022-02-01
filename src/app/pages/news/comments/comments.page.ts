import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  @Input() newsId: any;
  commentText: string;
  comments: any = null;
  uid: string;
  constructor(
    private modalController: ModalController,
    private firebaseAuth: AngularFireAuth,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    console.log("newsId", this.newsId);
    this.firebaseAuth.authState.subscribe((data: any) => {
      console.log(data.uid);
      this.uid = data.uid
    });
    this.sharedService.geNewsComments(this.newsId).subscribe((data: any) => {
      this.comments = data;
      console.log(this.comments);
      
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
  postComment(newsId: string) {
    console.log("Posting comment", newsId, this.uid);

    if (this.newsId != null && this.uid != null) {
      this.sharedService.postNewsComment(this.uid, newsId, this.commentText);
    }
  }
  
}
