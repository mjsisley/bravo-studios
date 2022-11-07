import { createGlobalStyle } from "styled-components";

// export default createGlobalStyle`
// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed, 
// figure, figcaption, footer, header, hgroup, 
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
// 	margin: 0;
// 	padding: 0;
// 	border: 0;
// 	font-size: 100%;
// 	font: inherit;
// 	vertical-align: baseline;
// 	color: unset;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure, 
// footer, header, hgroup, menu, nav, section {
// 	display: block;
// }
// body {
// 	line-height: 1;
// }
// ol, ul {
// 	list-style: none;
// }
// blockquote, q {
// 	quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
// 	content: '';
// 	content: none;
// }
// table {
// 	border-collapse: collapse;
// 	border-spacing: 0;
// }`;

export default createGlobalStyle`{
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
	  body:
		'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
	  heading: 'inherit',
	  monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
	  body: 400,
	  heading: 700,
	  bold: 700,
	},
	lineHeights: {
	  body: 1.5,
	  heading: 1.125,
	},
	colors: {
	  text: '#000',
	  background: '#fff',
	  primary: '#07c',
	  secondary: '#30c',
	  muted: '#f6f6f6',
	},
	text: {
	  heading: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontWeight: 'heading',
	  },
	},
	styles: {
	  root: {
		fontFamily: 'body',
		lineHeight: 'body',
		fontWeight: 'body',
	  },
	  h1: {
		variant: 'text.heading',
		fontSize: 5,
	  },
	  h2: {
		variant: 'text.heading',
		fontSize: 4,
	  },
	  h3: {
		variant: 'text.heading',
		fontSize: 3,
	  },
	  h4: {
		variant: 'text.heading',
		fontSize: 2,
	  },
	  h5: {
		variant: 'text.heading',
		fontSize: 1,
	  },
	  h6: {
		variant: 'text.heading',
		fontSize: 0,
	  },
	  pre: {
		fontFamily: 'monospace',
		overflowX: 'auto',
		code: {
		  color: 'inherit',
		},
	  },
	  code: {
		fontFamily: 'monospace',
		fontSize: 'inherit',
	  },
	  table: {
		width: '100%',
		borderCollapse: 'separate',
		borderSpacing: 0,
	  },
	  th: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	  td: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	},
  }`
