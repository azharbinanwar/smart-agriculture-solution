import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pesticide-details',
  templateUrl: './pesticide-details.page.html',
  styleUrls: ['./pesticide-details.page.scss'],
})
export class PesticideDetailsPage implements OnInit {
  private pesticideId: string = null;
  private data: any;
  public des: string;
  public price;
  public name: string;
  public companyName: string;
  public imageUrl: Array<string> = [];
  public targetCrops: Array<string> = [];
  public searchingTags: Array<string> = [];
  public pests: Array<string> = [];
  public targetCorps: Array<string> = [];
  public dosage: Array<string> = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.pesticideId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.pesticideId);
    if(this.pesticideId != null){
      this.sharedService.getPesticideDetails(this.pesticideId)
      .subscribe((data: any)=>{
        this.data = data;
        console.log(data);
        
        this.des = this.data.des;
        this.price = data.price;
        this.name = data.name;
        this.companyName = data.company_name;
        console.log(this.data.image_url);
        
        this.data.image_url.forEach(img => {
          this.imageUrl.push(img);
        });
        this.data.pests.forEach(pest => {
          this.pests.push(pest);
        });
        this.data.dosage.forEach(dosage => {
          this.dosage.push(dosage);
        });
        console.log(data);
        
        this.data.target_crops.forEach(crop => {
          this.targetCrops.push(crop);
        });
        

      });
      }
    }

}
