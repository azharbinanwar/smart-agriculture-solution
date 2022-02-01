import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage implements OnInit {
  public news: any;
  public title: any;
  public currentTitle: any;
  public newHeading: string = "How Are you I hope you'll be file How Are you I hope you'll be file";
  public desNews: string = "How Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be file"
  constructor(
    private sharedService: SharedService, private router: Router
  ) { }

  ngOnInit() {
    console.log("NIONit");

    this.sharedService.getAllNews().subscribe
      ((newsData: any) => {
        this.news = newsData;
        console.log("new Data", this.news);
      });
  }

  sliceTitle(title: string, id) {
    console.log(title, id);

    return title.slice(0, 45)
  }
  sliceDes(des: string) {
    return des.slice(0, 100);
  }
  onGoToNewsSinglePage(newsID: string) {
    
    this.router.navigate(['/news-details', newsID]);
  }
  // {
  //    this.sharedService.getSingleNews().subscribe
  //    ((title:any) => {
  //     this.news = title;
  //     console.log("new Dta",this.title);
  //    });
  // }
}
