import { ElementRef } from '@angular/core';

export class MaskHelper {
    private mask: string;
    private characterValidators: string[];
    private element: ElementRef;
    private nextValidCharIndex;
    
    public constructor(el: ElementRef, mask: string, characterValidators: string[]) {
        this.element = el;
        this.mask = mask;
        this.characterValidators = characterValidators;
    }

    public updateCharacter(e) : boolean {
        let curToReplaceIndex = this.element.nativeElement.selectionStart == 0 
            ? 1
            : this.element.nativeElement.selectionStart;    
        let currentText = this.element.nativeElement.value;
    
        // backspace pressed
        if (e.keyCode == 8){
            this.removeCharacter();
            return true;
        }

        // do nothing if at the end
        if (curToReplaceIndex >= this.mask.length)      
            return false;

        // validate character       
        let validator = '^' + this.characterValidators[curToReplaceIndex] + '$';           
            
        if (!(new RegExp(validator)).test(e.key))
            return false;
    
        let nextCharIndex = curToReplaceIndex + 1;
    
        this.element.nativeElement.value = currentText.substring(0, curToReplaceIndex) + 
          e.key + currentText.substring(nextCharIndex);
    
        while (this.characterValidators[nextCharIndex] == 'separator'){
          nextCharIndex += 1;
        }
    
        this.element.nativeElement.setSelectionRange(nextCharIndex, nextCharIndex);

        return true;
    }

    public setCursonAtBeginning() : void {
        if (this.element.nativeElement.value == this.mask){
            let startIndex = 0;

            while(this.characterValidators[startIndex] == 'separator'){
                ++startIndex;
            }

            this.element.nativeElement.setSelectionRange(startIndex, startIndex);
        } 
    }

    public setCursorOnNextValidChar() : void {
        this.element.nativeElement.setSelectionRange(this.nextValidCharIndex, this.nextValidCharIndex);
    }

    private removeCharacter(){
        let charToRemoveIndex = this.element.nativeElement.selectionStart - 1;
        let currentText = this.element.nativeElement.value;

        while (this.characterValidators[charToRemoveIndex] == 'separator'){
        charToRemoveIndex -= 1;
        }
        
        if (charToRemoveIndex > 0){
        this.element.nativeElement.value = currentText.substring(0, charToRemoveIndex) + 
            this.mask[charToRemoveIndex] + currentText.substring(charToRemoveIndex + 1);

        let nextValidCharIndex = charToRemoveIndex;

        while (this.characterValidators[nextValidCharIndex] == 'separator'){
            nextValidCharIndex -= 1;
        }

        this.element.nativeElement.setSelectionRange(nextValidCharIndex, nextValidCharIndex);
        }    
    }
}