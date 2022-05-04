import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TuiRepeatTimesModule } from "@taiga-ui/cdk";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, TuiRepeatTimesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
