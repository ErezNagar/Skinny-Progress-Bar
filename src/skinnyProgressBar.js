// one of the great things mobile has given the web is the nice little progress bar

//css
//nth-child
//border-radius
//gradient
// transition
class SkinnyProgressBar {
    constructor(options){
        this.options = options || {};

        this.options.el = this.options.el ? this.options.el : "body";
        //this.options.color = this.options.color ? this.options.color : "#4A148C";
        this.options.color = this.options.color ? this.options.color : "#01579B";

        this.model = {
            el: this.options.el,
            value: 0,
            options: this.options
        };

        this.progressBar = $("<div id='skinny-progress-bar'></div>");
        this.progressBar.css({
            "z-index": "99999",
            "height": "5px",
            "width": "0",
            "background-color": this.options.color,
            "opacity": "1",
            "border-top-right-radius": "4px",
            "border-bottom-right-radius": "4px",
            // "-webkit-transition": "width 2s, opacity 500ms",
            "transition": "width 200ms, opacity 400ms"
        });

        if (this.model.el == "body")
            $(this.model.el).prepend(this.progressBar);
        else
            $(this.model.el).append(this.progressBar);
    }

    load(value) {
        this.model.value = value;
        this.progressBar.css("width", this.model.value + "%");

        if (this.model.value == 100)
            this.reset();
    }

    reset() {
        this.model.value = 0;

        var self = this;
        setTimeout(function(){
            self.progressBar.css("opacity", 0);
        }, 200);

        setTimeout(function(){
            self.progressBar.css("opacity", 1);
        }, 700);
    }
}
