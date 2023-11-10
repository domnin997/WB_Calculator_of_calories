export default function makeNumFormat (input) {
    
    if (!input.value) {
        return;
    }

    else {
        input.value = input.value.replace(/[^\d,.]/g,'');
        input.value = input.value.replace(/,/g, ".");
        
        if (input.value.match(/\./g)) {
            
            if (input.value.match(/\./g).length > 1) {
                input.value = input.value.substr(0, input.value.lastIndexOf("."));
            }
        } 
    }
}