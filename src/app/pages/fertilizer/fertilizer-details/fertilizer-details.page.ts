import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-fertilizer-details',
  templateUrl: './fertilizer-details.page.html',
  styleUrls: ['./fertilizer-details.page.scss'],
})
export class FertilizerDetailsPage implements OnInit {
  private fertilizerId: string = null;
  private data: any;
  public des: string;
  public price: string;
  public name: string;
  public companyName: string;
  public imageUrl: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.fertilizerId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.fertilizerId);
    if(this.fertilizerId != null){
      this.sharedService.getFertilizerDetails(this.fertilizerId)
      .subscribe((data: any)=>{
        this.data = data;
        this.des = this.data.des;
        this.price = data.price;
        this.name = data.name;
        this.companyName = data.company_name;
        console.log(this.data.image_url);
        
        this.data.image_url.forEach(img => {
          this.imageUrl.push(img);
        })
        // this.data.experts.forEach(expert => {
        //   this.experts.push(expert);
        // })
        // this.data.comment.forEach(cmt => {
        //   this.comment.push(cmt);
        // })
        // console.log(this.comment);
        

      });
  }

}
}
