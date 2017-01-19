import {Pipe, PipeTransform} from '@angular/core';
import {Koolaid} from './koolaid';

@Pipe({
  name: "filter",
  pure: false
})


export class FilterPipe implements PipeTransform {
  transform(input: Koolaid[], ingredient) {
    var output: Koolaid[] = [];
    if(ingredient === "Cyanide") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].secretIngredient === "Cyanide") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (ingredient === "Codeine") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].secretIngredient === "Codeine") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (ingredient === "LSD") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].secretIngredient === "LSD") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
