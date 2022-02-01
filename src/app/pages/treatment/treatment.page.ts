import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/model/search/search.page';
import { CommonConst } from 'src/app/model/firebase/common-const';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.page.html',
  styleUrls: ['./treatment.page.scss'],
})
export class TreatmentPage implements OnInit {
  public cropDisease: any = null;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {

    this.sharedService.getAllCropDisease().subscribe
      ((data: any) => {
        this.cropDisease = data;
        console.log("Disease Data", this.cropDisease);
      });
  }
  treatmentDetail(id) {
    this.router.navigate(['/treatment-details', id]);
  }
  async search() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: { value: CommonConst.CROP_DISEASE }
    });

    await modal.present();

  }

}
