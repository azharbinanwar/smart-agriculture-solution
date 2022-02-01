import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommentsPage } from '../comments/comments.page';
import { NodeWithI18n } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  newsId: string;
  data: any;
  imageurl: string;
  title: string;
  date;
  comments: Array<string> = [];
  likes: Array<string> = [];
  des: string;
  uid: string;
  newsData: any;


  constructor(
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    public firebase: AngularFireAuth,

  ) { }

  ngOnInit() {
    this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.sharedService.getSingleNews(this.newsId).subscribe((data: any) => {
      console.log(data);
      this.newsData = data;
      this.imageurl = this.newsData.imageurl;
      this.title = this.newsData.title;
      this.date = this.newsData.datecreated.seconds * 1000;
      this.comments = [];
      this.newsData.comment.forEach(cmt => {
        this.comments.push(cmt)
      });
      this.newsData.like.forEach(like => {
        this.likes.push(like)
      })
      console.log(this.comments.length);
      console.log(this.date);
      this.des = data.des;
    });
    this.firebase.authState.subscribe(auth => {
      console.log(auth, auth.uid);
      this.uid = auth.uid;
    })
  }

  async commontPage(newsId: string) {
    const modal = await this.modalController
      .create({
        component: CommentsPage,
        swipeToClose: true,
        componentProps: { 'newsId': newsId }
      });

    await modal.present();
  }
  toggleLike(uid: string, likes: Array<string>, news_id: string) {
    this.sharedService.toggleLike(uid, likes, news_id);
    this.likes = [];
    this.newsData.like.forEach(like => {
      this.likes.push(like)
    })
    // if (this.likes.indexOf(uid) == 1) {
    //   this.likes = this.likes.filter(like => like != uid)
    //   console.log("like");
      
    // } if (this.likes.indexOf(uid) == -1) {
    //   this.likes.push(uid)
    //   console.log("dislike");
    // } console.log("like,", likes);

  }

}  
