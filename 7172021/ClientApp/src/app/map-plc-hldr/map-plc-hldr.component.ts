import { HttpClient } from '@angular/common/http'; //use this for HTTP functionallity
import { Component, ElementRef, Inject, Injectable, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-map-plc-hldr',
  templateUrl: './map-plc-hldr.component.html',
  styleUrls: ['./map-plc-hldr.component.css']
})

/** 
 * Contains the behavior to retrieve all territories to populate the map.
 * Upon construction it GETs the territories and fills the list
 * 'territories'
 * */
@Injectable()
export class MapPlcHldrComponent implements OnInit {
  //the url used for the api in functions
  //Kinda a hacky solution, but it works for now.
  private BaseUrl: string;

  //an array of territories we'll have. 
  public territories: Territory[];

  //For passing to sidebar
  public tNameInput: string;
  public tOwnerInput: string;
  public tTerrId: string;
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.tNameInput = "";
    this.tOwnerInput = "";
    this.tTerrId = "";
    this.BaseUrl = baseUrl;    
  }

  ngOnInit() {
    //populate the page
    this.http.get<Territory[]>(this.BaseUrl + 'Territory').subscribe(result => {//api at /Territory
      this.territories = result;
    }, error => console.error(error));
  }

  //when called, GETs the territory by id and updates the sidebar
  //NOTE: considering moving the CRUD functionality to an angular service to keep components clean
  public displayData(templateId) {
    this.http.get<any>(this.BaseUrl + 'Territory/' + templateId).subscribe(result => {//api at /Territory/id
      this.tNameInput = result.terrName;
      this.tOwnerInput = result.ownerID;
      this.tTerrId = result.terrID;
    }, error => console.error(error));
  }

  /*Triggers when somone clicks on the map but not on a territory
   *Clears the sidebar child (and the held id)*/
  public clearData() {
    this.tNameInput = "";
    this.tOwnerInput = "";
    this.tTerrId = "";
  }

  /*Calls to rewrite the map after add/delete*/
  public updateData() {
    this.http.get<Territory[]>(this.BaseUrl + 'Territory').subscribe(result => {//api at /Territory
      this.territories = result;
    }, error => console.error(error));
  }
}

interface Territory {
  TerrID: number;
  Name: string;
  OwnerID: number;
}
