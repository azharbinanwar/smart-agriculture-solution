import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { title } from 'process';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.page.html',
  styleUrls: ['./treatment-details.page.scss'],
})
export class TreatmentDetailsPage implements OnInit {

  private treatmentId: string = null;
  private data: any;
  public title: string;
  public des: string;
  public imageUrl: Array<string> = [];
  public comment: Array<string> = [];
  public experts: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.treatmentId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.treatmentId);
    if(this.treatmentId != null){
      this.sharedService.getTreatmentDetails(this.treatmentId)
      .subscribe((data: any)=>{
        this.data = data;
        this.title = this.data.title;
        this.des = this.data.des;
        console.log(this.data.image_url);
        
        this.data.image_url.forEach(img => {
          this.imageUrl.push(img);
        })
        this.data.experts.forEach(expert => {
          this.experts.push(expert);
        })
        this.data.comment.forEach(cmt => {
          this.comment.push(cmt);
        })
        console.log(this.comment);
        

      });
    }
    
  }

}
