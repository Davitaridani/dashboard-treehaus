import { Component } from "@angular/core";
import { BasicTableOneComponent } from "../../shared/components/tables/basic-tables/basic-table-one/basic-table-one.component";
import { PageBreadcrumbComponent } from "../../shared/components/common/page-breadcrumb/page-breadcrumb.component";

@Component({
  selector: "app-teacher",
  imports: [PageBreadcrumbComponent, BasicTableOneComponent],
  templateUrl: "./teacher.component.html",
})
export class TeacherComponent {}
