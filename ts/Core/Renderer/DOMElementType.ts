/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Declarations
 *
 * */

export type DOMElementType = DOMElementTypeRegistry[keyof DOMElementTypeRegistry];

export type HTMLDOMElement = globalThis.HTMLElement;

export type SVGDOMElement = globalThis.SVGElement;

interface DOMElementTypeRegistry {
    HTMLDOMElement: HTMLDOMElement;
    SVGDOMElement: SVGDOMElement;
}

/* *
 *
 *  Export
 *
 * */

export default DOMElementType;
