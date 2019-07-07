// Copyright2018 Rodrigo Silveira
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * 01234567890123456789012345678901234567890123456789012345678901234567890123456789
 * This simple class checks whether a string is a valid CSS color. The validation
 * consists of two steps. The first validates whether a string is a valid hex, rgb(a),
 * or hsl(a). If not, it validates whether the string is a valid CSS color name.
 */
export class CssColorString {
    
    // See here: https://www.w3schools.com/cssref/css_colors_legal.asp, for a discussion on the CSS Legal Color Values
    
    // From here: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    VALID_HEX_CSS_COLOR_EXPRESSION: any = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    
    // From here: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    VALID_RGB_CSS_COLOR_EXPRESSION: any =
        /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
    
    // From here: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    VALID_RGBA_CSS_COLOR_EXPRESSION: any =
        /^rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0?\.\d|1(\.0)?)\)$/;
    
    // From here: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    VALID_HSL_CSS_COLOR_EXPRESSION: any =
        /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/;
    
    // From here: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    VALID_HSLA_CSS_COLOR_EXPRESSION: any =
        /^hsla\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%,(0?\.\d|1(\.0)?)\)$/;
    
    // From here: https://www.w3schools.com/colors/colors_names.asp
    VALID_CSS_COLOR_NAMES: string[] = [
        'CLEAR',
        'TRANSPARENT',
        'ALICEBLUE',
        'ANTIQUEWHITE',
        'AQUA',
        'AQUAMARINE',
        'AZURE',
        'BEIGE',
        'BISQUE',
        'BLACK',
        'BLANCHEDALMOND',
        'BLUE',
        'BLUEVIOLET',
        'BROWN',
        'BURLYWOOD',
        'CADETBLUE',
        'CHARTREUSE',
        'CHOCOLATE',
        'CORAL',
        'CORNFLOWERBLUE',
        'CORNSILK',
        'CRIMSON',
        'CYAN',
        'DARKBLUE',
        'DARKCYAN',
        'DARKGOLDENROD',
        'DARKGRAY',
        'DARKGREY',
        'DARKGREEN',
        'DARKKHAKI',
        'DARKMAGENTA',
        'DARKOLIVEGREEN',
        'DARKORANGE',
        'DARKORCHID',
        'DARKRED',
        'DARKSALMON',
        'DARKSEAGREEN',
        'DARKSLATEBLUE',
        'DARKSLATEGRAY',
        'DARKSLATEGREY',
        'DARKTURQUOISE',
        'DARKVIOLET',
        'DEEPPINK',
        'DEEPSKYBLUE',
        'DIMGRAY',
        'DIMGREY',
        'DODGERBLUE',
        'FIREBRICK',
        'FLORALWHITE',
        'FORESTGREEN',
        'FUCHSIA',
        'GAINSBORO',
        'GHOSTWHITE',
        'GOLD',
        'GOLDENROD',
        'GRAY',
        'GREY',
        'GREEN',
        'GREENYELLOW',
        'HONEYDEW',
        'HOTPINK',
        'INDIANRED',
        'INDIGO',
        'IVORY',
        'KHAKI',
        'LAVENDER',
        'LAVENDERBLUSH',
        'LAWNGREEN',
        'LEMONCHIFFON',
        'LIGHTBLUE',
        'LIGHTCORAL',
        'LIGHTCYAN',
        'LIGHTGOLDENRODYELLOW',
        'LIGHTGRAY',
        'LIGHTGREY',
        'LIGHTGREEN',
        'LIGHTPINK',
        'LIGHTSALMON',
        'LIGHTSEAGREEN',
        'LIGHTSKYBLUE',
        'LIGHTSLATEGRAY',
        'LIGHTSLATEGREY',
        'LIGHTSTEELBLUE',
        'LIGHTYELLOW',
        'LIME',
        'LIMEGREEN',
        'LINEN',
        'MAGENTA',
        'MAROON',
        'MEDIUMAQUAMARINE',
        'MEDIUMBLUE',
        'MEDIUMORCHID',
        'MEDIUMPURPLE',
        'MEDIUMSEAGREEN',
        'MEDIUMSLATEBLUE',
        'MEDIUMSPRINGGREEN',
        'MEDIUMTURQUOISE',
        'MEDIUMVIOLETRED',
        'MIDNIGHTBLUE',
        'MINTCREAM',
        'MISTYROSE',
        'MOCCASIN',
        'NAVAJOWHITE',
        'NAVY',
        'OLDLACE',
        'OLIVE',
        'OLIVEDRAB',
        'ORANGE',
        'ORANGERED',
        'ORCHID',
        'PALEGOLDENROD',
        'PALEGREEN',
        'PALETURQUOISE',
        'PALEVIOLETRED',
        'PAPAYAWHIP',
        'PEACHPUFF',
        'PERU',
        'PINK',
        'PLUM',
        'POWDERBLUE',
        'PURPLE',
        'rebeccaPurple',
        'RED',
        'ROSYBROWN',
        'ROYALBLUE',
        'SADDLEBROWN',
        'SALMON',
        'SANDYBROWN',
        'SEAGREEN',
        'SEASHELL',
        'SIENNA',
        'SILVER',
        'SKYBLUE',
        'SLATEBLUE',
        'SLATEGRAY',
        'SLATEGREY',
        'SNOW',
        'SPRINGGREEN',
        'STEELBLUE',
        'TAN',
        'TEAL',
        'THISTLE',
        'TOMATO',
        'TURQUOISE',
        'VIOLET',
        'WHEAT',
        'WHITE',
        'WHITESMOKE',
        'YELLOW',
        'YELLOWGREEN',
    ];
    constructor() {
        // Ensure VALID_CSS_COLOR_NAMES elements are all upper case
        const VALID_CSS_COLOR_NAMES: string[] = [];
        for (const colorName of this.VALID_CSS_COLOR_NAMES) {
            VALID_CSS_COLOR_NAMES.push(colorName.toUpperCase());
        }
        this.VALID_CSS_COLOR_NAMES = VALID_CSS_COLOR_NAMES.slice(0);
    }
    
    isValid (color: string): boolean {
        return (this.isValidColorName(color) ||
            this.isValidColorExpressionHex(color) ||
            this.isValidRgbColorExpression(color) ||
            this.isValidRgbaColorExpression(color) ||
            this.isValidHslColorExpression(color) ||
            this.isValidHslaColorExpression(color));
    }
    
    isValidColorExpressionHex (color: string): boolean {
        return (this.VALID_HEX_CSS_COLOR_EXPRESSION.test(color));
    }
    
    isValidRgbColorExpression (color: string): boolean {
        // Remove spaces
        const _color = color.replace(/\s/g, '');
        return (this.VALID_RGB_CSS_COLOR_EXPRESSION.test(_color));
    }
    
    isValidRgbaColorExpression (color: string): boolean {
        // Remove spaces
        const _color = color.replace(/\s/g, '');
        return (this.VALID_RGBA_CSS_COLOR_EXPRESSION.test(_color));
    }
    
    isValidHslColorExpression (color: string): boolean {
        // Remove spaces
        const _color = color.replace(/\s/g, '');
        return (this.VALID_HSL_CSS_COLOR_EXPRESSION.test(_color));
    }
    
    isValidHslaColorExpression (color: string): boolean {
        // Remove spaces
        const _color = color.replace(/\s/g, '');
        return (this.VALID_HSLA_CSS_COLOR_EXPRESSION.test(_color));
    }
    
    isValidColorName (color: string): boolean {
        const upperCaseColor = color.toUpperCase();
        // console.log(`   ::isValidColorName - color:      ` + color);
        
        const validColor: string = this.VALID_CSS_COLOR_NAMES.find(
            function(arrayElement: string) {
                // console.log(`   ::isValidColorName - color:        ` + arrayElement.toUpperCase());
                // console.log(`   ::isValidColorName - arrayElement: ` + arrayElement.toUpperCase());
                return arrayElement === upperCaseColor; }
        );
        // console.log(`   ::isValidColorName - validColor: ` + validColor);
        return validColor !== undefined;
    }
}
