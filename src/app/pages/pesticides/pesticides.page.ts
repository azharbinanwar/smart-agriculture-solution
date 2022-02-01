import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { SearchPage } from 'src/app/model/search/search.page';
import { CommonConst } from 'src/app/model/firebase/common-const';

@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.page.html',
  styleUrls: ['./pesticides.page.scss'],
})
export class PesticidesPage implements OnInit {
  pesticides: any = null;

  constructor(
    private modalController: ModalController,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("NIONit");

    this.sharedService.getAllpesticides().subscribe
      ((data: any) => {
        this.pesticides = data;
        console.log("pesticides Data", this.pesticides);
      });
  }
  pesticideDetail(id) {
    this.router.navigate(['/pesticide-details', id]);
  }
  async search() {
    const modal = await this.modalController.create({
    component: SearchPage,
    componentProps: { value: CommonConst.PESTICIDES }
    });
  
    await modal.present();
  }

}
