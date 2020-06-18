//% weight=0 color=#3CB371 icon="\uf0ad" block="areacal"
namespace areacal {
    /**
    * 
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=3 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=3 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
	 /**
    * 
    */
	//% blockId="ledOfTriangle" block="show area of Triangles base %base|height %height"
    //% blockGap=3 weight=2
    export function ledOfTriangle(base: number, height:number): void {
        basic.showNumber(0.5*base*height)
    }
}
