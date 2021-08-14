import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      if (params["id"] != null || params["id"] != undefined)
        this.editMode = true;
    });
  }
}
