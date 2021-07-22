import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

/*This component is the informational sidebar in the main map screen.*/
@Component({
  selector: 'app-map-sidebar',
  templateUrl: './map-sidebar.component.html',
  styleUrls: ['./map-sidebar.component.css']
})
export class MapSidebarComponent {
  @Input() nameInput = '';
  @Input() ownerInput = '';
  @Input() idInput = '';
  @Output() updateMap = new EventEmitter();

  private BaseUrl: string;

  public factionsList: number[];

  //used in Add Territory input
  nameControl = new FormControl();
  ownerIdControl = new FormControl(1);

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.BaseUrl = baseUrl;
    this.factionsList = [2,3,4,5]; //Idea to use this later to dynamically fill faction option array for add terr.
  }

  /*Adds a territory via the sidebar input.
   *
   * Currently not functioning due to JSON to int32 conversion issues.
   * Controller is capable of posting via Postman though*/
  public addTerritory(){
    if (this.nameControl.value == null) {
      alert("Must include a name when adding a territory.")
    }
    else {
      let t = {
        TerrName: this.nameControl.value,
        OwnerID: this.ownerIdControl.value
      };
      this.nameControl.reset;

      return this.http.post<Territory>(this.BaseUrl + 'Territory', t)
        .subscribe(result => {
          
        }, error => console.error(error));       
    }
  }

  /*Deletes the territory currently selected */
  public deleteTerritory() {
    if (this.nameInput != "" && this.nameInput != null) {
      if (confirm("Are you sure you want to delete " + this.nameInput + "?")) {
        this.http.delete(this.BaseUrl + 'Territory/' + this.idInput)
          .subscribe(), error => console.error(error);
        //Need the parent to update the list:
        this.updateMap.emit(null);       
      }
    }    
  }

  //Not yet implemented
  public editTerritory() {
    console.log("PUT not yet implemented")
  }

}

/*Perhaps move this interface to an export, since it is reused in other components*/
interface Territory {
  TerrName: string;
  OwnerID: number;
}
