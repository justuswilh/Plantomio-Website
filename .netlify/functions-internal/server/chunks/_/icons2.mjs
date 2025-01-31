var prefix = "lucide";
var icons = {
	"a-arrow-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.5 13h6M2 16l4.5-9l4.5 9m7-9v9m-4-4l4 4l4-4\"/>"
	},
	"a-arrow-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.5 13h6M2 16l4.5-9l4.5 9m7 0V7m-4 4l4-4l4 4\"/>"
	},
	"a-large-small": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 14h-5m0 2v-3.5a2.5 2.5 0 0 1 5 0V16M4.5 13h6M3 16l4.5-9l4.5 9\"/>"
	},
	accessibility: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"16\" cy=\"4\" r=\"1\"/><path d=\"m18 19l1-7l-6 1M5 8l3-3l5.5 3l-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6\"/><path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\"/></g>"
	},
	activity: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"/>"
	},
	"air-vent": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12m.3 9.7a2.5 2.5 0 0 1-3.16 3.83a2.53 2.53 0 0 1-1.14-2V12m-7.4 3.6A2 2 0 1 0 10 17v-5\"/>"
	},
	airplay: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"/><path d=\"m12 15l5 6H7Z\"/></g>"
	},
	"alarm-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 9v4l2 2M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21\"/></g>"
	},
	"alarm-clock-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21M9 13l2 2l4-4\"/></g>"
	},
	"alarm-clock-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21M9 13h6\"/></g>"
	},
	"alarm-clock-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6.87 6.87a8 8 0 1 0 11.26 11.26m1.77-3.88a8 8 0 0 0-9.15-9.15M22 6l-3-3M6.26 18.67L4 21M2 2l20 20M4 4L2 6\"/>"
	},
	"alarm-clock-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21m-8-11v6m-3-3h6\"/></g>"
	},
	"alarm-smoke": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 21c0-2.5 2-2.5 2-5m3 5c0-2.5 2-2.5 2-5m1-8l-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8m16-5a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1zM6 21c0-2.5 2-2.5 2-5\"/>"
	},
	album: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M11 3v8l3-3l3 3V3\"/></g>"
	},
	"align-center": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 12H7m12 6H5M21 6H3\"/>"
	},
	"align-center-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12h20m-12 4v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4m6-8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4m16 8v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1m0-8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1\"/>"
	},
	"align-center-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v20M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4m8 6h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1m8 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1\"/>"
	},
	"align-end-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"16\" x=\"4\" y=\"2\" rx=\"2\"/><rect width=\"6\" height=\"9\" x=\"14\" y=\"9\" rx=\"2\"/><path d=\"M22 22H2\"/></g>"
	},
	"align-end-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"9\" height=\"6\" x=\"9\" y=\"14\" rx=\"2\"/><path d=\"M22 22V2\"/></g>"
	},
	"align-horizontal-distribute-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M17 22v-5m0-10V2M7 22v-3M7 5V2\"/></g>"
	},
	"align-horizontal-distribute-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M10 2v20M20 2v20\"/></g>"
	},
	"align-horizontal-distribute-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M4 2v20M14 2v20\"/></g>"
	},
	"align-horizontal-justify-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\"/><path d=\"M12 2v20\"/></g>"
	},
	"align-horizontal-justify-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"12\" y=\"7\" rx=\"2\"/><path d=\"M22 2v20\"/></g>"
	},
	"align-horizontal-justify-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"6\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\"/><path d=\"M2 2v20\"/></g>"
	},
	"align-horizontal-space-around": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"10\" x=\"9\" y=\"7\" rx=\"2\"/><path d=\"M4 22V2m16 20V2\"/></g>"
	},
	"align-horizontal-space-between": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"15\" y=\"7\" rx=\"2\"/><path d=\"M3 2v20M21 2v20\"/></g>"
	},
	"align-justify": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12h18M3 18h18M3 6h18\"/>"
	},
	"align-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12H3m14 6H3M21 6H3\"/>"
	},
	"align-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12H9m12 6H7M21 6H3\"/>"
	},
	"align-start-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"16\" x=\"4\" y=\"6\" rx=\"2\"/><rect width=\"6\" height=\"9\" x=\"14\" y=\"6\" rx=\"2\"/><path d=\"M22 2H2\"/></g>"
	},
	"align-start-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"9\" height=\"6\" x=\"6\" y=\"14\" rx=\"2\"/><rect width=\"16\" height=\"6\" x=\"6\" y=\"4\" rx=\"2\"/><path d=\"M2 2v20\"/></g>"
	},
	"align-vertical-distribute-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 17h-3m3-10h-5M5 17H2M7 7H2\"/><rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"/></g>"
	},
	"align-vertical-distribute-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"/><path d=\"M2 20h20M2 10h20\"/></g>"
	},
	"align-vertical-distribute-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"/><path d=\"M2 14h20M2 4h20\"/></g>"
	},
	"align-vertical-justify-center": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"16\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"2\" rx=\"2\"/><path d=\"M2 12h20\"/></g>"
	},
	"align-vertical-justify-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"12\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"2\" rx=\"2\"/><path d=\"M2 22h20\"/></g>"
	},
	"align-vertical-justify-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"16\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"6\" rx=\"2\"/><path d=\"M2 2h20\"/></g>"
	},
	"align-vertical-space-around": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"10\" height=\"6\" x=\"7\" y=\"9\" rx=\"2\"/><path d=\"M22 20H2M22 4H2\"/></g>"
	},
	"align-vertical-space-between": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"6\" x=\"5\" y=\"15\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"3\" rx=\"2\"/><path d=\"M2 21h20M2 3h20\"/></g>"
	},
	ambulance: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 10H6m8 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m14 0h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14M8 8v4m1 6h6\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/></g>"
	},
	ampersand: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13m-3-8h3\"/>"
	},
	ampersands: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6c0 1.7 1.3 3 3 3c2.8 0 5-2.2 5-5m12 5c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6c0 1.7 1.3 3 3 3c2.8 0 5-2.2 5-5\"/>"
	},
	amphora: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8\"/><path d=\"M10 5H8a2 2 0 0 0 0 4h.68M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8\"/><path d=\"M14 5h2a2 2 0 0 1 0 4h-.68M18 22H6M9 2h6\"/></g>"
	},
	anchor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 22V8m-7 4H2a10 10 0 0 0 20 0h-3\"/><circle cx=\"12\" cy=\"5\" r=\"3\"/></g>"
	},
	angry: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 16s-1.5-2-4-2s-4 2-4 2m-.5-8L10 9m4 0l2.5-1M9 10h.01M15 10h.01\"/></g>"
	},
	annoyed: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 15h8M8 9h2m4 0h2\"/></g>"
	},
	antenna: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6\"/>"
	},
	anvil: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 10H6a4 4 0 0 1-4-4a1 1 0 0 1 1-1h4m0 0a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1a7 7 0 0 1-7 7H8a1 1 0 0 1-1-1zm2 7v5m6-5v5M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1\"/>"
	},
	aperture: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\"/></g>"
	},
	"app-window": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M10 4v4M2 8h20M6 4v4\"/></g>"
	},
	"app-window-mac": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 8h.01M10 8h.01M14 8h.01\"/></g>"
	},
	apple: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 20.94c1.5 0 2.75 1.06 4 1.06c3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2c-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06\"/><path d=\"M10 2c1 .5 2 2 2 5\"/></g>"
	},
	archive: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"/><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4\"/></g>"
	},
	"archive-restore": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"/><path d=\"M4 8v11a2 2 0 0 0 2 2h2M20 8v11a2 2 0 0 1-2 2h-2m-7-6l3-3l3 3m-3-3v9\"/></g>"
	},
	"archive-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"/><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M9.5 17l5-5m-5 0l5 5\"/></g>"
	},
	"area-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v18h18\"/><path d=\"M7 12v5h12V8l-5 5l-4-4Z\"/></g>",
		hidden: true
	},
	armchair: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3\"/><path d=\"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2\"/></g>"
	},
	"arrow-big-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 6v6h4l-7 7l-7-7h4V6z\"/>"
	},
	"arrow-big-down-dash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 5H9m6 4v3h4l-7 7l-7-7h4V9z\"/>"
	},
	"arrow-big-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 15h-6v4l-7-7l7-7v4h6z\"/>"
	},
	"arrow-big-left-dash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 15V9m-4 6h-3v4l-7-7l7-7v4h3z\"/>"
	},
	"arrow-big-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 9h6V5l7 7l-7 7v-4H6z\"/>"
	},
	"arrow-big-right-dash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 9v6m4-6h3V5l7 7l-7 7v-4H9z\"/>"
	},
	"arrow-big-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 18v-6H5l7-7l7 7h-4v6z\"/>"
	},
	"arrow-big-up-dash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19h6m-6-4v-3H5l7-7l7 7h-4v3z\"/>"
	},
	"arrow-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 5v14m7-7l-7 7l-7-7\"/>"
	},
	"arrow-down-0-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m3 16l4 4l4-4m-4 4V4\"/><rect width=\"4\" height=\"6\" x=\"15\" y=\"4\" ry=\"2\"/><path d=\"M17 20v-6h-2m0 6h4\"/></g>"
	},
	"arrow-down-1-0": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m3 16l4 4l4-4m-4 4V4m10 6V4h-2m0 6h4\"/><rect width=\"4\" height=\"6\" x=\"15\" y=\"14\" ry=\"2\"/></g>"
	},
	"arrow-down-a-z": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 16l4 4l4-4m-4 4V4m13 4h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5\"/>"
	},
	"arrow-down-from-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 3H5m7 18V7m-6 8l6 6l6-6\"/>"
	},
	"arrow-down-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 7L7 17m10 0H7V7\"/>"
	},
	"arrow-down-narrow-wide": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 16l4 4l4-4m-4 4V4m4 0h4m-4 4h7m-7 4h10\"/>"
	},
	"arrow-down-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 7l10 10m0-10v10H7\"/>"
	},
	"arrow-down-to-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 2v14m7-7l-7 7l-7-7\"/><circle cx=\"12\" cy=\"21\" r=\"1\"/></g>"
	},
	"arrow-down-to-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 17V3m-6 8l6 6l6-6m1 10H5\"/>"
	},
	"arrow-down-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 16l4 4l4-4m-4 4V4m14 4l-4-4l-4 4m4-4v16\"/>"
	},
	"arrow-down-wide-narrow": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 16l4 4l4-4m-4 4V4m4 0h10M11 8h7m-7 4h4\"/>"
	},
	"arrow-down-z-a": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 16l4 4l4-4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5\"/>"
	},
	"arrow-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 19l-7-7l7-7m7 7H5\"/>"
	},
	"arrow-left-from-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m9 6l-6 6l6 6m-6-6h14m4 7V5\"/>"
	},
	"arrow-left-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4\"/>"
	},
	"arrow-left-to-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 19V5m10 1l-6 6l6 6m-6-6h14\"/>"
	},
	"arrow-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 12h14m-7-7l7 7l-7 7\"/>"
	},
	"arrow-right-from-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5v14m18-7H7m8 6l6-6l-6-6\"/>"
	},
	"arrow-right-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16\"/>"
	},
	"arrow-right-to-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 12H3m8 6l6-6l-6-6m10-1v14\"/>"
	},
	"arrow-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5 12l7-7l7 7m-7 7V5\"/>"
	},
	"arrow-up-0-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m3 8l4-4l4 4M7 4v16\"/><rect width=\"4\" height=\"6\" x=\"15\" y=\"4\" ry=\"2\"/><path d=\"M17 20v-6h-2m0 6h4\"/></g>"
	},
	"arrow-up-1-0": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m3 8l4-4l4 4M7 4v16m10-10V4h-2m0 6h4\"/><rect width=\"4\" height=\"6\" x=\"15\" y=\"14\" ry=\"2\"/></g>"
	},
	"arrow-up-a-z": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 8l4-4l4 4M7 4v16M20 8h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5\"/>"
	},
	"arrow-up-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21 16l-4 4l-4-4m4 4V4M3 8l4-4l4 4M7 4v16\"/>"
	},
	"arrow-up-from-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m5 9l7-7l7 7m-7 7V2\"/><circle cx=\"12\" cy=\"21\" r=\"1\"/></g>"
	},
	"arrow-up-from-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 9l-6-6l-6 6m6-6v14m-7 4h14\"/>"
	},
	"arrow-up-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 17V7h10m0 10L7 7\"/>"
	},
	"arrow-up-narrow-wide": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 8l4-4l4 4M7 4v16m4-8h4m-4 4h7m-7 4h10\"/>"
	},
	"arrow-up-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h10v10M7 17L17 7\"/>"
	},
	"arrow-up-to-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 3h14m-1 10l-6-6l-6 6m6-6v14\"/>"
	},
	"arrow-up-wide-narrow": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 8l4-4l4 4M7 4v16m4-8h10m-10 4h7m-7 4h4\"/>"
	},
	"arrow-up-z-a": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 8l4-4l4 4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5\"/>"
	},
	"arrows-up-from-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4 6l3-3l3 3M7 17V3m7 3l3-3l3 3m-3 11V3M4 21h16\"/>"
	},
	asterisk: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v12m5.196-9L6.804 15m0-6l10.392 6\"/>"
	},
	"at-sign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\"/></g>"
	},
	atom: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9c-4.54-4.52-9.87-6.54-11.9-4.5c-2.04 2.03-.02 7.36 4.5 11.9c4.54 4.52 9.87 6.54 11.9 4.5\"/><path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9c-2.03-2.04-7.36-.02-11.9 4.5c-4.52 4.54-6.54 9.87-4.5 11.9c2.03 2.04 7.36.02 11.9-4.5\"/></g>"
	},
	"audio-lines": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3\"/>"
	},
	"audio-waveform": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2\"/>"
	},
	award: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"/><circle cx=\"12\" cy=\"8\" r=\"6\"/></g>"
	},
	axe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9\"/><path d=\"M15 13L9 7l4-4l6 6h3a8 8 0 0 1-7 7z\"/></g>"
	},
	"axis-3d": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16h16M4 20l7-7\"/>"
	},
	baby: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"/><path d=\"M19 6.3a9 9 0 0 1 1.8 3.9a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"/></g>"
	},
	backpack: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 0h8m-8 8h8\"/><path d=\"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"/></g>"
	},
	badge: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/>"
	},
	"badge-alert": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v4m0 4h.01\"/>"
	},
	"badge-cent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 7v10\"/><path d=\"M15.4 10a4 4 0 1 0 0 4\"/></g>"
	},
	"badge-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/><path d=\"m9 12l2 2l4-4\"/></g>"
	},
	"badge-dollar-sign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6\"/></g>"
	},
	"badge-euro": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M7 12h5\"/><path d=\"M15 9.4a4 4 0 1 0 0 5.2\"/></g>"
	},
	"badge-help": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\"/></g>"
	},
	"badge-indian-rupee": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M8 8h8m-8 4h8\"/><path d=\"m13 17l-5-1h1a4 4 0 0 0 0-8\"/></g>"
	},
	"badge-info": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 16v-4m0-4h.01\"/>"
	},
	"badge-japanese-yen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/><path d=\"m9 8l3 3v7m0-7l3-3m-6 4h6m-6 4h6\"/></g>"
	},
	"badge-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M8 12h8\"/>"
	},
	"badge-percent": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M15 9l-6 6m0-6h.01M15 15h.01\"/>"
	},
	"badge-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8\"/>"
	},
	"badge-pound-sterling": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M8 12h4\"/><path d=\"M10 16V9.5a2.5 2.5 0 0 1 5 0M8 16h7\"/></g>"
	},
	"badge-russian-ruble": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M9 16h5\"/><path d=\"M9 12h5a2 2 0 1 0 0-4h-3v9\"/></g>"
	},
	"badge-swiss-franc": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76\"/><path d=\"M11 17V8h4m-4 4h3m-5 4h4\"/></g>"
	},
	"badge-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M15 9l-6 6m0-6l6 6\"/>"
	},
	"baggage-claim": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2\"/><path d=\"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10\"/><rect width=\"13\" height=\"8\" x=\"8\" y=\"6\" rx=\"1\"/><circle cx=\"18\" cy=\"20\" r=\"2\"/><circle cx=\"9\" cy=\"20\" r=\"2\"/></g>"
	},
	ban: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.9 4.9l14.2 14.2\"/></g>"
	},
	banana: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5\"/><path d=\"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8c0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11\"/></g>"
	},
	bandage: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v11.5M6 6v12\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	banknote: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M6 12h.01M18 12h.01\"/></g>"
	},
	"bar-chart-3": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18m-3-4V9m-5 8V5M8 17v-3\"/>",
		hidden: true
	},
	"bar-chart-4": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18m-8-4V9m5 8V5M8 17v-3\"/>",
		hidden: true
	},
	"bar-chart-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v18h18\"/><rect width=\"4\" height=\"7\" x=\"7\" y=\"10\" rx=\"1\"/><rect width=\"4\" height=\"12\" x=\"15\" y=\"5\" rx=\"1\"/></g>",
		hidden: true
	},
	"bar-chart-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18M7 16h8m-8-5h12M7 6h3\"/>",
		hidden: true
	},
	"bar-chart-horizontal-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v18h18\"/><rect width=\"12\" height=\"4\" x=\"7\" y=\"5\" rx=\"1\"/><rect width=\"7\" height=\"4\" x=\"7\" y=\"13\" rx=\"1\"/></g>",
		hidden: true
	},
	barcode: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14\"/>"
	},
	baseline: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 20h16M6 16l6-12l6 12M8 12h8\"/>"
	},
	bath: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5\"/>"
	},
	battery: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"/><path d=\"M22 11v2\"/></g>"
	},
	"battery-charging": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1m6-10l-3 5h4l-3 5m13-6v2\"/>"
	},
	"battery-full": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"/><path d=\"M22 11v2M6 11v2m4-2v2m4-2v2\"/></g>"
	},
	"battery-low": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"/><path d=\"M22 11v2M6 11v2\"/></g>"
	},
	"battery-medium": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"/><path d=\"M22 11v2M6 11v2m4-2v2\"/></g>"
	},
	"battery-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 9v6m3.5-8H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5m8.5-6v2M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5m.5 5h6\"/>"
	},
	"battery-warning": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 17h.01M10 7v6m4-6h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2m8-6v2M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"/>"
	},
	beaker: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12\"/>"
	},
	bean: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.165 6.598C9.954 7.478 9.64 8.36 9 9s-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402\"/><path d=\"M5.341 10.62a4 4 0 1 0 5.279-5.28\"/></g>"
	},
	"bean-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66\"/><path d=\"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4 4 0 0 1 2.039 2.04M2 2l20 20\"/></g>"
	},
	bed: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9\"/>"
	},
	"bed-double": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20\"/>"
	},
	"bed-single": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 18h18\"/>"
	},
	beef: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12.5\" cy=\"8.5\" r=\"2.5\"/><path d=\"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2\"/><path d=\"m18.5 6l2.19 4.5a6.5 6.5 0 0 1 .31 2a6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5\"/></g>"
	},
	beer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17 11h1a3 3 0 0 1 0 6h-1m-8-5v6m4-6v6m1-10.5c-1 0-1.44.5-3 .5s-2-.5-3-.5s-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5s1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5\"/><path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8\"/></g>"
	},
	"beer-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 13v5m4-6.53V8m0 3h1a3 3 0 0 1 2.745 4.211M2 2l20 20M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3\"/><path d=\"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268m4.995-.528C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.2 3.2 0 0 0-.842.12M9 14.6V18\"/></g>"
	},
	bell: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/>"
	},
	"bell-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.268 21a2 2 0 0 0 3.464 0m.184-18.686A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673a9 9 0 0 1-.585-.665\"/><circle cx=\"18\" cy=\"8\" r=\"3\"/></g>"
	},
	"bell-electric": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18.8 4A6.3 8.7 0 0 1 20 9M9 9h.01\"/><circle cx=\"9\" cy=\"9\" r=\"7\"/><rect width=\"10\" height=\"6\" x=\"4\" y=\"16\" rx=\"2\"/><path d=\"M14 19c3 0 4.6-1.6 4.6-1.6\"/><circle cx=\"20\" cy=\"16\" r=\"2\"/></g>"
	},
	"bell-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-4.757-4.243A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12\"/>"
	},
	"bell-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.268 21a2 2 0 0 0 3.464 0M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742M2 2l20 20M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05\"/>"
	},
	"bell-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332\"/>"
	},
	"bell-ring": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.268 21a2 2 0 0 0 3.464 0M22 8c0-2.3-.8-4.3-2-6M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326M4 2C2.8 3.7 2 5.7 2 8\"/>"
	},
	"between-horizontal-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"13\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"m22 15l-3-3l3-3\"/><rect width=\"13\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/></g>"
	},
	"between-horizontal-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"13\" height=\"7\" x=\"8\" y=\"3\" rx=\"1\"/><path d=\"m2 9l3 3l-3 3\"/><rect width=\"13\" height=\"7\" x=\"8\" y=\"14\" rx=\"1\"/></g>"
	},
	"between-vertical-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"13\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"m9 22l3-3l3 3\"/><rect width=\"7\" height=\"13\" x=\"14\" y=\"3\" rx=\"1\"/></g>"
	},
	"between-vertical-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"13\" x=\"3\" y=\"8\" rx=\"1\"/><path d=\"m15 2l-3 3l-3-3\"/><rect width=\"7\" height=\"13\" x=\"14\" y=\"8\" rx=\"1\"/></g>"
	},
	"biceps-flexed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7c-4.077 0-8.153-.82-10.371-2.462c-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3a2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1\"/><path d=\"M15 14a5 5 0 0 0-7.584 2\"/><path d=\"M9.964 6.825C8.019 7.977 9.5 13 8 15\"/></g>"
	},
	bike: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><path d=\"M12 17.5V14l-3-3l4-3l2 3h2\"/></g>"
	},
	binary: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"4\" height=\"6\" x=\"14\" y=\"14\" rx=\"2\"/><rect width=\"4\" height=\"6\" x=\"6\" y=\"4\" rx=\"2\"/><path d=\"M6 20h4m4-10h4M6 14h2v6m6-16h2v6\"/></g>"
	},
	binoculars: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 10h4m5-3V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m5 14a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm2-5H2m2 5a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2zM9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3\"/>"
	},
	biohazard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"11.9\" r=\"2\"/><path d=\"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6m6.9-1.5l1.4.8m7-7.5c.9 2.5 0 5.2-2.2 6.7c2.4-1.2 5.2-.6 6.9 1.5m-6.9-1.5l-1.4.8m3 9.9c-2.6-.4-4.6-2.6-4.7-5.3c-.2 2.6-2.1 4.8-4.7 5.2m4.7-6.8v1.6m1.5-10.1q-1.5-.3-3 0m6.5 11c.7-.7 1.2-1.6 1.5-2.5m-13 0c.3.9.8 1.8 1.5 2.5\"/></g>"
	},
	bird: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20\"/><path d=\"m20 7l2 .5l-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61\"/></g>"
	},
	bitcoin: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727\"/>"
	},
	blend: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"9\" cy=\"9\" r=\"7\"/><circle cx=\"15\" cy=\"15\" r=\"7\"/></g>"
	},
	blinds: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14\"/><circle cx=\"4\" cy=\"19\" r=\"2\"/></g>"
	},
	blocks: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><path d=\"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3\"/></g>"
	},
	bluetooth: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 7l10 10l-5 5V2l5 5L7 17\"/>"
	},
	"bluetooth-connected": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 7l10 10l-5 5V2l5 5L7 17m11-5h3M3 12h3\"/>"
	},
	"bluetooth-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m17 17l-5 5V12l-5 5M2 2l20 20M14.5 9.5L17 7l-5-5v4.5\"/>"
	},
	"bluetooth-searching": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 7l10 10l-5 5V2l5 5L7 17m13.83-2.17a4 4 0 0 0 0-5.66M18 12h.01\"/>"
	},
	bold: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8\"/>"
	},
	bolt: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></g>"
	},
	bomb: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"13\" r=\"9\"/><path d=\"M14.35 4.65L16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95M22 2l-1.5 1.5\"/></g>"
	},
	bone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5a.5.5 0 0 1-.5-.5a2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z\"/>"
	},
	book: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/>"
	},
	"book-a": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m8 13l4-7l4 7m-6.9-2h5.7\"/></g>"
	},
	"book-audio": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v7m4-5v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M8 8v3\"/>"
	},
	"book-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 9.5l2 2l4-4\"/></g>"
	},
	"book-copy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 16V4a2 2 0 0 1 2-2h11\"/><path d=\"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12m-4-6H4a2 2 0 1 0 0 4h1\"/></g>"
	},
	"book-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 17h1.5M12 22h1.5M12 2h1.5m4 20H19a1 1 0 0 0 1-1M17.5 2H19a1 1 0 0 1 1 1v1.5m0 9.5v3h-2.5M20 8.5V10M4 10V8.5m0 11V14m0-9.5A2.5 2.5 0 0 1 6.5 2H8m0 20H6.5a1 1 0 0 1 0-5H8\"/>"
	},
	"book-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13V7M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 10l3 3l3-3\"/></g>"
	},
	"book-headphones": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M8 12v-2a4 4 0 0 1 8 0v2\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"12\" r=\"1\"/></g>"
	},
	"book-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 8.2A2.22 2.22 0 0 0 13.8 6q-1.2 0-1.8.9q-.6-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A227 227 0 0 0 12 13a404 404 0 0 0 3.3-3.1a2.4 2.4 0 0 0 .7-1.7\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/></g>"
	},
	"book-image": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m20 13.7l-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><circle cx=\"10\" cy=\"8\" r=\"2\"/></g>"
	},
	"book-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m19 3l1 1m0-2l-4.5 4.5M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14\"/><circle cx=\"14\" cy=\"8\" r=\"2\"/></g>"
	},
	"book-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 6V4a2 2 0 1 0-4 0v2m6 9v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10\"/><rect width=\"8\" height=\"5\" x=\"12\" y=\"6\" rx=\"1\"/></g>"
	},
	"book-marked": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2v8l3-3l3 3V2\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/></g>"
	},
	"book-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6\"/>"
	},
	"book-open": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z\"/>"
	},
	"book-open-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 21V7m4 5l2 2l4-4\"/><path d=\"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4a4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3\"/></g>"
	},
	"book-open-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 7v14m4-9h2m-2-4h2M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3zm3-6h2M6 8h2\"/>"
	},
	"book-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6\"/>"
	},
	"book-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M8 11h8M8 7h6\"/>"
	},
	"book-type": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 13h4m-2-7v7m4-5V6H8v2\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/></g>"
	},
	"book-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13V7M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 10l3-3l3 3\"/></g>"
	},
	"book-up-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13V7m6-5h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2M9 10l3-3l3 3M9 5l3-3l3 3\"/></g>"
	},
	"book-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 13a3 3 0 1 0-6 0\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/></g>"
	},
	"book-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m14.5 7l-5 5M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9.5 7l5 5\"/>"
	},
	bookmark: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>"
	},
	"bookmark-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z\"/><path d=\"m9 10l2 2l4-4\"/></g>"
	},
	"bookmark-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm-4-11H9\"/>"
	},
	"bookmark-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM12 7v6m3-3H9\"/>"
	},
	"bookmark-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2ZM14.5 7.5l-5 5m0-5l5 5\"/>"
	},
	"boom-box": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 8v1m4-1v1m4-1v1\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"9\" rx=\"2\"/><circle cx=\"8\" cy=\"15\" r=\"2\"/><circle cx=\"16\" cy=\"15\" r=\"2\"/></g>"
	},
	bot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 8V4H8\"/><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M2 14h2m16 0h2m-7-1v2m-6-2v2\"/></g>"
	},
	"bot-message-square": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6V2H8m0 16l-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-6-6h2m5-1v2m6-2v2m5-1h2\"/>"
	},
	"bot-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.67 8H18a2 2 0 0 1 2 2v4.33M2 14h2m16 0h2m0 8L2 2m6 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586M9 13v2m.67-11H12v2.33\"/>"
	},
	box: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"/><path d=\"m3.3 7l8.7 5l8.7-5M12 22V12\"/></g>"
	},
	boxes: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17\"/><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8\"/></g>"
	},
	braces: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1\"/>"
	},
	brackets: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 3h3v18h-3m-8 0H5V3h3\"/>"
	},
	brain: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"/><path d=\"M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z\"/><path d=\"M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18\"/></g>"
	},
	"brain-circuit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"/><path d=\"M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2\"/><circle cx=\"16\" cy=\"13\" r=\".5\"/><circle cx=\"18\" cy=\"3\" r=\".5\"/><circle cx=\"20\" cy=\"21\" r=\".5\"/><circle cx=\"20\" cy=\"8\" r=\".5\"/></g>"
	},
	"brain-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5a3 3 0 1 0-5.997.142a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588a4 4 0 0 0 7.636 2.106a3 3 0 0 0 .164-.546c.028-.13.306-.13.335 0a3 3 0 0 0 .163.546a4 4 0 0 0 7.636-2.106a4 4 0 0 0 .556-6.588a4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5\"/><path d=\"M17.599 6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m15.7 10.4l-.9.4m-5.6 2.4l-.9.4m5.3 2.1l-.4-.9m-2.4-5.6l-.4-.9m5.3 5.2l-.9-.4m-5.6-2.2l-.9-.4m2.2 5.2l.4-.9m2.2-5.6l.4-.9\"/></g>"
	},
	"brick-wall": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 9v6m4 0v6m0-18v6M3 15h18M3 9h18M8 15v6M8 3v6\"/></g>"
	},
	briefcase: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	"briefcase-business": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	"briefcase-conveyor-belt": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 20v2m4-2v2m4-2v2m3-2H3m3 0v2m2-6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12\"/><rect width=\"16\" height=\"10\" x=\"4\" y=\"6\" rx=\"2\"/></g>"
	},
	"briefcase-medical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	"bring-to-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"8\" x=\"8\" y=\"8\" rx=\"2\"/><path d=\"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m4 16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2\"/></g>"
	},
	brush: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08m-6.03-1.01c-1.66 0-3 1.35-3 3.02c0 1.33-2.5 1.52-2 2.02c1.08 1.1 2.49 2.02 4 2.02c2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02\"/>"
	},
	bug: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/><path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9\"/><path d=\"M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4\"/></g>"
	},
	"bug-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2m6.12 1.88L16 2\"/><path d=\"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3\"/><path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4M2 2l20 20M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13M12 20v-8m-6 1H2\"/><path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"/></g>"
	},
	"bug-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696zM14.12 3.88L16 2\"/><path d=\"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5\"/><path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4M3 21c0-2.1 1.7-3.9 3.8-4M6 13H2m4.53-4C4.6 8.8 3 7.1 3 5m5-3l1.88 1.88M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/></g>"
	},
	building: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01\"/></g>"
	},
	"building-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Zm0-10H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4m-4 4h4m-4 4h4m-4 4h4\"/>"
	},
	bus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/></g>"
	},
	"bus-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 6L2 7m8-1h4m8 1l-2-1\"/><rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2\"/></g>"
	},
	cable: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1\"/><path d=\"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9m16 12v-2h-4M3 5h4V3\"/><path d=\"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3\"/></g>"
	},
	"cable-car": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5\"/><rect width=\"16\" height=\"10\" x=\"4\" y=\"12\" rx=\"3\"/><path d=\"M9 12v5m6-5v5M4 17h16\"/></g>"
	},
	cake: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"/><path d=\"M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01\"/></g>"
	},
	"cake-slice": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"9\" cy=\"7\" r=\"2\"/><path d=\"M7.2 7.9L3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6M16 13H3m13 4H3\"/></g>"
	},
	calculator: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01\"/></g>"
	},
	calendar: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/></g>"
	},
	"calendar-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 14h1v4m4-16v4M3 10h18M8 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/></g>"
	},
	"calendar-arrow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14 18l4 4l4-4M16 2v4m2 8v8\"/><path d=\"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343M3 10h18M8 2v4\"/></g>"
	},
	"calendar-arrow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14 18l4-4l4 4M16 2v4m2 16v-8\"/><path d=\"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9M3 10h18M8 2v4\"/></g>"
	},
	"calendar-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18M9 16l2 2l4-4\"/></g>"
	},
	"calendar-check-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10l2 2l4-4\"/>"
	},
	"calendar-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M16 2v4M8 2v4m-5 4h5m9.5 7.5L16 16.3V14\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/></g>"
	},
	"calendar-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15.2 16.9l-.9-.4m.9 2.6l-.9.4M16 2v4m.9 9.2l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10.7-5.5l-.9.4m.9 2.6l-.9-.4M3 10h18M8 2v4\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/></g>"
	},
	"calendar-days": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01\"/></g>"
	},
	"calendar-fold": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4m5 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11ZM3 10h18\"/><path d=\"M15 22v-4a2 2 0 0 1 2-2h4\"/></g>"
	},
	"calendar-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M8 2v4m8-4v4\"/><path d=\"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34l-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53c-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z\"/></g>"
	},
	"calendar-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 19h6M16 2v4m5 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4\"/>"
	},
	"calendar-minus-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18m-11 6h4\"/></g>"
	},
	"calendar-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18M21 15.5V6a2 2 0 0 0-2-2H9.5M16 2v4M3 10h7m11 0h-5.5M2 2l20 20\"/>"
	},
	"calendar-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2v4m8-4v4m5 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 9h6m-3-3v6\"/>"
	},
	"calendar-plus-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18m-11 6h4m-2-2v4\"/></g>"
	},
	"calendar-range": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M16 2v4M3 10h18M8 2v4m9 8h-6m2 4H7m0-4h.01M17 18h.01\"/></g>"
	},
	"calendar-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 2v4m5 5.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25M22 22l-1.875-1.875M3 10h18M8 2v4\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/></g>"
	},
	"calendar-sync": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 10v4h4\"/><path d=\"m11 14l1.535-1.605a5 5 0 0 1 8 1.5M16 2v4m5 12l-1.535 1.605a5 5 0 0 1-8-1.5\"/><path d=\"M21 22v-4h-4m4-9.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3M3 10h4m1-8v4\"/></g>"
	},
	"calendar-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18m-7 4l-4 4m0-4l4 4\"/></g>"
	},
	"calendar-x-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2v4m8-4v4m5 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-4 12l5-5m-5 0l5 5\"/>"
	},
	camera: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/></g>"
	},
	"camera-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 2l20 20M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5\"/><path d=\"M14.121 15.121A3 3 0 1 1 9.88 10.88\"/></g>"
	},
	"candlestick-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 5v4\"/><rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\"/><path d=\"M9 15v2m8-14v2\"/><rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\"/><path d=\"M17 13v3M3 3v18h18\"/></g>",
		hidden: true
	},
	candy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9.5 7.5l-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7m4.5-1v10m-4-9v10\"/><path d=\"m16 7l1-5l1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1m-9 9l-1 5l-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1\"/></g>"
	},
	"candy-cane": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6a2 2 0 1 1-3.464-2a2 2 0 1 0-3.464-2ZM17.75 7L15 2.1m-4.1 2.7L13 9m-5.1.7l2 4.4m-5 .6L7 18.9\"/>"
	},
	"candy-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8.5 8.5l-1 1a4.95 4.95 0 0 0 7 7l1-1m-3.657-9.313A4.95 4.95 0 0 1 16.5 7.5a4.95 4.95 0 0 1 1.313 4.657M14 16.5V14m0-7.5v1.843M10 10v7.5\"/><path d=\"m16 7l1-5l1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1m-9 9l-1 5l-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1M2 2l20 20\"/></g>"
	},
	cannabis: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22v-4m-5-6c-1.5 0-4.5 1.5-5 3c3.5 1.5 6 1 6 1c-1.5 1.5-2 3.5-2 5c2.5 0 4.5-1.5 6-3c1.5 1.5 3.5 3 6 3c0-1.5-.5-3.5-2-5c0 0 2.5.5 6-1c-.5-1.5-3.5-3-5-3c1.5-1 4-4 4-6c-2.5 0-5.5 1.5-7 3c0-2.5-.5-5-2-7c-1.5 2-2 4.5-2 7c-1.5-1.5-4.5-3-7-3c0 2 2.5 5 4 6\"/>"
	},
	captions: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\" ry=\"2\"/><path d=\"M7 15h4m4 0h2M7 11h2m4 0h4\"/></g>"
	},
	"captions-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.5 5H19a2 2 0 0 1 2 2v8.5M17 11h-.5m2.5 8H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M2 2l20 20M7 11h4m-4 4h2.5\"/>"
	},
	car: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></g>"
	},
	"car-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m21 8l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01\"/><rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M5 18v2m14-2v2\"/></g>"
	},
	"car-taxi-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2h4m7 6l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01\"/><rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M5 18v2m14-2v2\"/></g>"
	},
	caravan: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2\"/><path d=\"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2m20 4v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9\"/><circle cx=\"8\" cy=\"19\" r=\"2\"/></g>"
	},
	carrot: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46\"/><path d=\"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9\"/><path d=\"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2\"/></g>"
	},
	"case-lower": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"7\" cy=\"12\" r=\"3\"/><path d=\"M10 9v6\"/><circle cx=\"17\" cy=\"12\" r=\"3\"/><path d=\"M14 7v8\"/></g>"
	},
	"case-sensitive": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m3 15l4-8l4 8m-7-2h6\"/><circle cx=\"18\" cy=\"12\" r=\"3\"/><path d=\"M21 9v6\"/></g>"
	},
	"case-upper": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4\"/>"
	},
	"cassette-tape": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><circle cx=\"8\" cy=\"10\" r=\"2\"/><path d=\"M8 12h8\"/><circle cx=\"16\" cy=\"10\" r=\"2\"/><path d=\"m6 20l.7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3\"/></g>"
	},
	cast: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 12a9 9 0 0 1 8 8m-8-4a5 5 0 0 1 4 4m-4 0h.01\"/>"
	},
	castle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2m-4-9V4H6v7\"/><path d=\"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4m13-11V9M2 11V9m4-5V2m12 2V2m-8 2V2m4 2V2\"/></g>"
	},
	cat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5\"/><path d=\"M11.25 16.25h1.5L12 17z\"/></g>"
	},
	cctv: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97m1.696-5.627a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3zM2 19h3.76a2 2 0 0 0 1.8-1.1L9 15m-7 6v-4m5-8h.01\"/>"
	},
	"chart-area": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z\"/></g>"
	},
	"chart-bar": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3\"/>"
	},
	"chart-bar-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect width=\"9\" height=\"4\" x=\"7\" y=\"13\" rx=\"1\"/><rect width=\"12\" height=\"4\" x=\"7\" y=\"5\" rx=\"1\"/></g>"
	},
	"chart-bar-decreasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12\"/>"
	},
	"chart-bar-increasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h12M7 6h3\"/>"
	},
	"chart-bar-stacked": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 13v4m4-12v4M3 3v16a2 2 0 0 0 2 2h16\"/><rect width=\"9\" height=\"4\" x=\"7\" y=\"13\" rx=\"1\"/><rect width=\"12\" height=\"4\" x=\"7\" y=\"5\" rx=\"1\"/></g>"
	},
	"chart-candlestick": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 5v4\"/><rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\"/><path d=\"M9 15v2m8-14v2\"/><rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\"/><path d=\"M17 13v3M3 3v16a2 2 0 0 0 2 2h16\"/></g>"
	},
	"chart-column": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3\"/>"
	},
	"chart-column-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect width=\"4\" height=\"12\" x=\"15\" y=\"5\" rx=\"1\"/><rect width=\"4\" height=\"9\" x=\"7\" y=\"8\" rx=\"1\"/></g>"
	},
	"chart-column-decreasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5\"/>"
	},
	"chart-column-increasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3\"/>"
	},
	"chart-column-stacked": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 13H7m12-4h-4M3 3v16a2 2 0 0 0 2 2h16\"/><rect width=\"4\" height=\"12\" x=\"15\" y=\"5\" rx=\"1\"/><rect width=\"4\" height=\"9\" x=\"7\" y=\"8\" rx=\"1\"/></g>"
	},
	"chart-gantt": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 6h8m-6 10h6M3 3v16a2 2 0 0 0 2 2h16M8 11h7\"/>"
	},
	"chart-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"m19 9l-5 5l-4-4l-3 3\"/></g>"
	},
	"chart-network": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m13.11 7.664l1.78 2.672m-.728 2.452l-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16\"/><circle cx=\"12\" cy=\"6\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/><circle cx=\"9\" cy=\"15\" r=\"2\"/></g>"
	},
	"chart-no-axes-column": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 20V10m-6 10V4M6 20v-6\"/>"
	},
	"chart-no-axes-column-decreasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20V10m6 10v-4M6 20V4\"/>"
	},
	"chart-no-axes-column-increasing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20V10m6 10V4M6 20v-4\"/>"
	},
	"chart-no-axes-combined": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 16v5m4-7v7m4-11v11m2-18l-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15m2 3v3m4-7v7\"/>"
	},
	"chart-no-axes-gantt": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 6h10M6 12h9m-4 6h7\"/>"
	},
	"chart-pie": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\"/><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/></g>"
	},
	"chart-scatter": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/></g>"
	},
	"chart-spline": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 16c.5-2 1.5-7 4-7c2 0 2 3 4 3c2.5 0 4.5-5 5-7\"/></g>"
	},
	check: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 6L9 17l-5-5\"/>"
	},
	"check-check": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16\"/>"
	},
	"chef-hat": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12\"/>"
	},
	cherry: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3\"/><path d=\"M7 14c3.22-2.91 4.29-8.75 5-12c1.66 2.38 4.94 9 5 12\"/><path d=\"M22 9c-4.29 0-7.14-2.33-10-7c5.71 0 10 4.67 10 7\"/></g>"
	},
	"chevron-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 9l6 6l6-6\"/>"
	},
	"chevron-first": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m17 18l-6-6l6-6M7 6v12\"/>"
	},
	"chevron-last": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 18l6-6l-6-6m10 0v12\"/>"
	},
	"chevron-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 18l-6-6l6-6\"/>"
	},
	"chevron-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m9 18l6-6l-6-6\"/>"
	},
	"chevron-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 15l-6-6l-6 6\"/>"
	},
	"chevrons-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 6l5 5l5-5M7 13l5 5l5-5\"/>"
	},
	"chevrons-down-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 20l5-5l5 5M7 4l5 5l5-5\"/>"
	},
	"chevrons-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m11 17l-5-5l5-5m7 10l-5-5l5-5\"/>"
	},
	"chevrons-left-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m9 7l-5 5l5 5m6-10l5 5l-5 5\"/>"
	},
	"chevrons-left-right-ellipsis": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 8l4 4l-4 4M6 8l-4 4l4 4m2-4h.01M12 12h.01M16 12h.01\"/>"
	},
	"chevrons-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 17l5-5l-5-5m7 10l5-5l-5-5\"/>"
	},
	"chevrons-right-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m20 17l-5-5l5-5M4 17l5-5l-5-5\"/>"
	},
	"chevrons-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m17 11l-5-5l-5 5m10 7l-5-5l-5 5\"/>"
	},
	"chevrons-up-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 15l5 5l5-5M7 9l5-5l5 5\"/>"
	},
	chrome: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M21.17 8H12M3.95 6.06L8.54 14m2.34 7.94L15.46 14\"/></g>"
	},
	church: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 9h4m-2-2v5m2 10v-4a2 2 0 0 0-4 0v4\"/><path d=\"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22\"/><path d=\"m18 7l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7\"/></g>"
	},
	cigarette: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14m1-8c0-2.5-2-2.5-2-5m5 13a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m1-4c0-2.5-2-2.5-2-5M7 12v4\"/>"
	},
	"cigarette-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13m2-8c0-2.5-2-2.5-2-5M2 2l20 20m-1-10a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866M22 8c0-2.5-2-2.5-2-5M7 12v4\"/>"
	},
	circle: {
		body: "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>"
	},
	"circle-alert": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4m0 4h.01\"/></g>"
	},
	"circle-arrow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v8m-4-4l4 4l4-4\"/></g>"
	},
	"circle-arrow-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 12H8m4-4l-4 4l4 4\"/></g>"
	},
	"circle-arrow-out-down-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12a10 10 0 1 1 10 10M2 22l10-10M8 22H2v-6\"/>"
	},
	"circle-arrow-out-down-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22a10 10 0 1 1 10-10m0 10L12 12m10 4v6h-6\"/>"
	},
	"circle-arrow-out-up-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 8V2h6M2 2l10 10m0-10A10 10 0 1 1 2 12\"/>"
	},
	"circle-arrow-out-up-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 12A10 10 0 1 1 12 2m10 0L12 12m4-10h6v6\"/>"
	},
	"circle-arrow-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8m-4 4l4-4l-4-4\"/></g>"
	},
	"circle-arrow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 12l-4-4l-4 4m4 4V8\"/></g>"
	},
	"circle-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12l2 2l4-4\"/></g>"
	},
	"circle-check-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.801 10A10 10 0 1 1 17 3.335\"/><path d=\"m9 11l3 3L22 4\"/></g>"
	},
	"circle-chevron-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 10l-4 4l-4-4\"/></g>"
	},
	"circle-chevron-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m14 16l-4-4l4-4\"/></g>"
	},
	"circle-chevron-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m10 8l4 4l-4 4\"/></g>"
	},
	"circle-chevron-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m8 14l4-4l4 4\"/></g>"
	},
	"circle-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7\"/>"
	},
	"circle-divide": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 12h8m-4-4\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	"circle-dollar-sign": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6\"/></g>"
	},
	"circle-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></g>"
	},
	"circle-dot-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></g>"
	},
	"circle-ellipsis": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M17 12h.01M12 12h.01M7 12h.01\"/></g>"
	},
	"circle-equal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 10h10M7 14h10\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	"circle-fading-arrow-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2a10 10 0 0 1 7.38 16.75M16 12l-4-4l-4 4m4 4V8m-9.5.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38\"/>"
	},
	"circle-fading-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2a10 10 0 0 1 7.38 16.75M12 8v8m4-4H8M2.5 8.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38\"/>"
	},
	"circle-gauge": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.6 2.7a10 10 0 1 0 5.7 5.7\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M13.4 10.6L19 5\"/></g>"
	},
	"circle-help": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\"/></g>"
	},
	"circle-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/></g>"
	},
	"circle-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m2 2l20 20M8.35 2.69A10 10 0 0 1 21.3 15.65m-2.22 3.43A10 10 0 1 1 4.92 4.92\"/>"
	},
	"circle-parking": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/></g>"
	},
	"circle-parking-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m5 5l14 14m-6-6a3 3 0 1 0 0-6H9v2m0 8v-2.34\"/></g>"
	},
	"circle-pause": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M10 15V9m4 6V9\"/></g>"
	},
	"circle-percent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9l-6 6m0-6h.01M15 15h.01\"/></g>"
	},
	"circle-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m10 8l6 4l-6 4z\"/></g>"
	},
	"circle-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8m-4-4v8\"/></g>"
	},
	"circle-power": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 7v4M7.998 9.003a5 5 0 1 0 8-.005\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	"circle-slash": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 15l6-6\"/></g>"
	},
	"circle-slash-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M22 2L2 22\"/></g>"
	},
	"circle-stop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"/></g>"
	},
	"circle-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\"/></g>"
	},
	"circle-user-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 20a6 6 0 0 0-12 0\"/><circle cx=\"12\" cy=\"10\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	"circle-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9l-6 6m0-6l6 6\"/></g>"
	},
	"circuit-board": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M11 9h4a2 2 0 0 0 2-2V3\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"M7 21v-4a2 2 0 0 1 2-2h4\"/><circle cx=\"15\" cy=\"15\" r=\"2\"/></g>"
	},
	citrus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z\"/><path d=\"M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5\"/><path d=\"M14 17.85V10H6.15\"/></g>"
	},
	clapperboard: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Zm-14-.7l3.1 3.9m3.1-5.8l3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z\"/>"
	},
	clipboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/></g>"
	},
	"clipboard-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"m9 14l2 2l4-4\"/></g>"
	},
	"clipboard-copy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v4m1 4H11\"/><path d=\"m15 10l-4 4l4 4\"/></g>"
	},
	"clipboard-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01\"/></g>"
	},
	"clipboard-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m1 10h6\"/></g>"
	},
	"clipboard-paste": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2m-9 6h10\"/><path d=\"m17 10l4 4l-4 4\"/></g>"
	},
	"clipboard-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5M4 13.5V6a2 2 0 0 1 2-2h2\"/><path d=\"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/></g>"
	},
	"clipboard-pen-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5M16 4h2a2 2 0 0 1 1.73 1M8 18h1\"/><path d=\"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/></g>"
	},
	"clipboard-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m1 10h6m-3 3v-6\"/></g>"
	},
	"clipboard-type": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M9 12v-1h6v1m-4 5h2m-1-6v6\"/></g>"
	},
	"clipboard-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m7 7l-6 6m0-6l6 6\"/></g>"
	},
	clock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></g>"
	},
	"clock-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l2.5-4\"/></g>"
	},
	"clock-10": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-4-2\"/></g>"
	},
	"clock-11": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6L9.5 8\"/></g>"
	},
	"clock-12": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6\"/></g>"
	},
	"clock-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4-2\"/></g>"
	},
	"clock-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6h4.5\"/></g>"
	},
	"clock-4": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></g>"
	},
	"clock-5": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l2.5 4\"/></g>"
	},
	"clock-6": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v10.5\"/></g>"
	},
	"clock-7": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-2.5 4\"/></g>"
	},
	"clock-8": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-4 2\"/></g>"
	},
	"clock-9": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6H7.5\"/></g>"
	},
	"clock-alert": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 6v6l4 2\"/><path d=\"M16 21.16a10 10 0 1 1 5-13.516M20 11.5v6m0 4h.01\"/></g>"
	},
	"clock-arrow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.338 21.994a10 10 0 1 1 9.587-8.767\"/><path d=\"M12 6v6l2 1m0 5l4 4l4-4m-4-4v8\"/></g>"
	},
	"clock-arrow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13.228 21.925a10 10 0 1 1 8.766-9.587\"/><path d=\"M12 6v6l1.562.781M14 18l4-4l4 4m-4 4v-8\"/></g>"
	},
	cloud: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9\"/>"
	},
	"cloud-alert": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 12v4m0 4h.01M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708\"/>"
	},
	"cloud-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"17\" r=\"3\"/><path d=\"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-4.3 2.2l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4\"/></g>"
	},
	"cloud-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13v8l-4-4m4 4l4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/></g>"
	},
	"cloud-drizzle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v1m0-6v1m8 4v1m0-6v1m-4 6v1m0-6v1\"/>"
	},
	"cloud-fog": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 17H7m10 4H9\"/>"
	},
	"cloud-hail": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v2m-8-2v2m8 4h.01M8 20h.01M12 16v2m0 4h.01\"/>"
	},
	"cloud-lightning": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973\"/><path d=\"m13 12l-3 5h4l-3 5\"/></g>"
	},
	"cloud-moon": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6a6 6 0 0 1-3 5.197M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z\"/>"
	},
	"cloud-moon-rain": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6a6 6 0 0 1-3 5.197M11 20v2m-8-2a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M7 19v2\"/>"
	},
	"cloud-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m2 2l20 20M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193m2.725-2.307A4.5 4.5 0 0 0 17.5 10h-1.79A7.01 7.01 0 0 0 10 5.07\"/>"
	},
	"cloud-rain": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6\"/>"
	},
	"cloud-rain-wind": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M9.2 22l3-7M9 13l-3 7m11-7l-3 7\"/>"
	},
	"cloud-snow": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01\"/>"
	},
	"cloud-sun": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6\"/>"
	},
	"cloud-sun-rain": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M11 20v2m-4-3v2\"/>"
	},
	"cloud-upload": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"m8 17l4-4l4 4\"/></g>"
	},
	cloudy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9\"/><path d=\"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5\"/></g>"
	},
	clover: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16.17 7.83L2 22m2.02-10a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12m3.83-4.17l8.34 8.34\"/>"
	},
	club: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6ZM12 17.66V22\"/>"
	},
	code: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 18l6-6l-6-6M8 6l-6 6l6 6\"/>"
	},
	"code-xml": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16\"/>"
	},
	codepen: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 2l10 6.5v7L12 22L2 15.5v-7zm0 20v-6.5\"/><path d=\"m22 8.5l-10 7l-10-7\"/><path d=\"m2 15.5l10-7l10 7M12 2v6.5\"/></g>"
	},
	codesandbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16\"/><path d=\"m7.5 4.21l4.5 2.6l4.5-2.6m-9 15.58V14.6L3 12m18 0l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12\"/></g>"
	},
	coffee: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2\"/>"
	},
	cog: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16\"/><path d=\"M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93\"/></g>"
	},
	coins: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"8\" cy=\"8\" r=\"6\"/><path d=\"M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4\"/><path d=\"m16.71 13.88l.7.71l-2.82 2.82\"/></g>"
	},
	"columns-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 3v18\"/></g>"
	},
	"columns-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18m6-18v18\"/></g>"
	},
	"columns-4": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7.5 3v18M12 3v18m4.5-18v18\"/></g>"
	},
	combine: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 18H5a3 3 0 0 1-3-3v-1M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m6-8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2\"/><path d=\"m7 21l3-3l-3-3\"/><rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\"/></g>"
	},
	command: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"/>"
	},
	compass: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	component: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0zm-13.239 0a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0zm6.619 6.619a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0zm0-13.238a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z\"/>"
	},
	computer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"8\" x=\"5\" y=\"2\" rx=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h2m4 0h6\"/></g>"
	},
	"concierge-bell": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Zm17-4a8 8 0 1 0-16 0m8-12v4m-2-4h4\"/>"
	},
	cone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m20.9 18.55l-8-15.98a1 1 0 0 0-1.8 0l-8 15.98\"/><ellipse cx=\"12\" cy=\"19\" rx=\"9\" ry=\"3\"/></g>"
	},
	construction: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"6\" rx=\"1\"/><path d=\"M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8\"/></g>"
	},
	contact: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2\"/><circle cx=\"12\" cy=\"11\" r=\"3\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/></g>"
	},
	"contact-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 2v2m1.915 18a6 6 0 0 0-12 0M8 2v2\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/></g>"
	},
	container: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z\"/><path d=\"M10 21.9V14L2.1 9.1M10 14l11.9-6.9M14 19.8v-8.1m4 5.8V9.4\"/></g>"
	},
	contrast: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 18a6 6 0 0 0 0-12z\"/></g>"
	},
	cookie: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2a10 10 0 1 0 10 10a4 4 0 0 1-5-5a4 4 0 0 1-5-5M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01\"/>"
	},
	"cooking-pot": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12h20m-2 0v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m0-4l16-4M8.86 6.78l-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8\"/>"
	},
	copy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	"copy-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 15l2 2l4-4\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	"copy-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 15h6\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	"copy-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 12v6m-3-3h6\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	"copy-slash": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 18l6-6\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	"copy-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 12l6 6m-6 0l6-6\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>"
	},
	copyleft: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.17 14.83a4 4 0 1 0 0-5.66\"/></g>"
	},
	copyright: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M14.83 14.83a4 4 0 1 1 0-5.66\"/></g>"
	},
	"corner-down-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 10l-5 5l5 5\"/><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"/></g>"
	},
	"corner-down-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 10l5 5l-5 5\"/><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"/></g>"
	},
	"corner-left-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14 15l-5 5l-5-5\"/><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"/></g>"
	},
	"corner-left-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 9L9 4L4 9\"/><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"/></g>"
	},
	"corner-right-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 15l5 5l5-5\"/><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"/></g>"
	},
	"corner-right-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 9l5-5l5 5\"/><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"/></g>"
	},
	"corner-up-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 14L4 9l5-5\"/><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"/></g>"
	},
	"corner-up-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 14l5-5l-5-5\"/><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"/></g>"
	},
	cpu: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"/><path d=\"M15 2v2m0 16v2M2 15h2M2 9h2m16 6h2m-2-6h2M9 2v2m0 16v2\"/></g>"
	},
	"creative-commons": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M10 9.3a2.8 2.8 0 0 0-3.5 1a3.1 3.1 0 0 0 0 3.4a2.7 2.7 0 0 0 3.5 1m7-5.4a2.8 2.8 0 0 0-3.5 1a3.1 3.1 0 0 0 0 3.4a2.7 2.7 0 0 0 3.5 1\"/></g>"
	},
	"credit-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><path d=\"M2 10h20\"/></g>"
	},
	croissant: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4.6 13.11l5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11m5.9-3.61l-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.7 7.7 0 0 0 2 4.83M8 6c0-1.55.24-4-2-4c-2 0-2.5 2.17-2.5 4m11 7.5l2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.7 7.7 0 0 1-4.83-2M18 16c1.55 0 4-.24 4 2c0 2-2.17 2.5-4 2.5\"/>"
	},
	crop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 2v14a2 2 0 0 0 2 2h14\"/><path d=\"M18 22V8a2 2 0 0 0-2-2H2\"/></g>"
	},
	cross: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z\"/>"
	},
	crosshair: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M22 12h-4M6 12H2m10-6V2m0 20v-4\"/></g>"
	},
	crown: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14\"/>"
	},
	cuboid: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m21.12 6.4l-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66\"/><path d=\"M10 22v-8L2.25 9.15M10 14l11.77-6.87\"/></g>"
	},
	"cup-soda": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m6 8l1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0m-5-7l1-6h2\"/></g>"
	},
	currency: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"m3 3l3 3m15-3l-3 3M3 21l3-3m15 3l-3-3\"/></g>"
	},
	cylinder: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5v14a9 3 0 0 0 18 0V5\"/></g>"
	},
	dam: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 11.31c1.17.56 1.54 1.69 3.5 1.69c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1m-10.25 6c.35.5 1.45 1 2.75 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 10h4m-4 4h4m-4 4h4M2 6h4\"/><path d=\"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z\"/></g>"
	},
	database: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5v14a9 3 0 0 0 18 0V5\"/><path d=\"M3 12a9 3 0 0 0 18 0\"/></g>"
	},
	"database-backup": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 12a9 3 0 0 0 5 2.69M21 9.3V5\"/><path d=\"M3 5v14a9 3 0 0 0 6.47 2.88M12 12v4h4\"/><path d=\"M13 20a5 5 0 0 0 9-3a4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16\"/></g>"
	},
	"database-zap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5\"/><path d=\"M3 12a9 3 0 0 0 11.59 2.87\"/></g>"
	},
	"delete": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm2 4l6 6m0-6l-6 6\"/>"
	},
	dessert: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"4\" r=\"2\"/><path d=\"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8\"/><path d=\"M3.2 14.8a9 9 0 0 0 17.6 0\"/></g>"
	},
	diameter: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"19\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"5\" r=\"2\"/><path d=\"M6.48 3.66a10 10 0 0 1 13.86 13.86M6.41 6.41l11.18 11.18M3.66 6.48a10 10 0 0 0 13.86 13.86\"/></g>"
	},
	diamond: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z\"/>"
	},
	"diamond-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0zM8 12h8\"/>"
	},
	"diamond-percent": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Zm6.5-1.1h.01m5.29.3l-5 5m5.2.3h.01\"/>"
	},
	"diamond-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v8m-9.3-5.7a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0zM8 12h8\"/>"
	},
	"dice-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M12 12h.01\"/></g>"
	},
	"dice-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M15 9h.01M9 15h.01\"/></g>"
	},
	"dice-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01M12 12h.01M8 16h.01\"/></g>"
	},
	"dice-4": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01M8 8h.01M8 16h.01M16 16h.01\"/></g>"
	},
	"dice-5": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01M8 8h.01M8 16h.01M16 16h.01M12 12h.01\"/></g>"
	},
	"dice-6": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01M16 12h.01M16 16h.01M8 8h.01M8 12h.01M8 16h.01\"/></g>"
	},
	dices: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"12\" height=\"12\" x=\"2\" y=\"10\" rx=\"2\" ry=\"2\"/><path d=\"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01\"/></g>"
	},
	diff: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3v14m-7-7h14M5 21h14\"/>"
	},
	disc: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></g>"
	},
	"disc-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 12h.01\"/></g>"
	},
	"disc-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M6 12c0-1.7.7-3.2 1.8-4.2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M18 12c0 1.7-.7 3.2-1.8 4.2\"/></g>"
	},
	"disc-album": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 12h.01\"/></g>"
	},
	divide: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"6\" r=\"1\"/><path d=\"M5 12h14\"/><circle cx=\"12\" cy=\"18\" r=\"1\"/></g>"
	},
	dna: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993\"/>"
	},
	"dna-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2l-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16\"/>"
	},
	dock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 8h20\"/><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 16h12\"/></g>"
	},
	dog: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11.25 16.25h1.5L12 17zM16 14v.5\"/><path d=\"M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5\"/><path d=\"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5\"/></g>"
	},
	"dollar-sign": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>"
	},
	donut: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4a10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
	},
	"door-closed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h20m-8-8v.01\"/>"
	},
	"door-open": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 4h3a2 2 0 0 1 2 2v14M2 20h3m8 0h9m-12-8v.01m3-7.448v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z\"/>"
	},
	dot: {
		body: "<circle cx=\"12.1\" cy=\"12.1\" r=\"1\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"/>"
	},
	download: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3\"/>"
	},
	"drafting-compass": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12.99 6.74l1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/></g>"
	},
	drama: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 11h.01M14 6h.01M18 6h.01M6.5 13.1h.01M22 5c0 9-4 12-6 12s-6-3-6-12q0-3 6-3c6 0 6 1 6 3\"/><path d=\"M17.4 9.9c-.8.8-2 .8-2.8 0m-4.5-2.8C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6c4.5 7.8 9.5 8.4 11.2 7.4c.9-.5 1.9-2.1 1.9-4.7\"/><path d=\"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4\"/></g>"
	},
	dribbble: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32\"/><path d=\"M8.56 2.75c4.37 6 6 9.42 8 17.72\"/></g>"
	},
	drill: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3a1 1 0 0 1 1-1zm3-8H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8m6-10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m4-2h4M5 10l-2 8m4 0l2-8\"/>"
	},
	droplet: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7\"/>"
	},
	"droplet-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586M2 2l20 20M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208\"/>"
	},
	droplets: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05\"/><path d=\"M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"/></g>"
	},
	drum: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 2l8 8m12-8l-8 8\"/><ellipse cx=\"12\" cy=\"9\" rx=\"10\" ry=\"5\"/><path d=\"M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9\"/></g>"
	},
	drumstick: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.4 15.63a7.875 6 135 1 1 6.23-6.23a4.5 3.43 135 0 0-6.23 6.23\"/><path d=\"m8.29 12.71l-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59\"/></g>"
	},
	dumbbell: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.4 14.4L9.6 9.6m9.057 11.885a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829zm2.843.015l-1.4-1.4M3.9 3.9L2.5 2.5m3.904 10.268a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z\"/>"
	},
	ear: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0\"/><path d=\"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4\"/></g>"
	},
	"ear-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46M6 8.5c0-.75.13-1.47.36-2.14M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76\"/><path d=\"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18M2 2l20 20\"/></g>"
	},
	earth: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	"earth-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 3.34V5a3 3 0 0 0 3 3m1 13.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05m19.49 4H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M12 2a10 10 0 1 0 9.54 13M20 6V4a2 2 0 1 0-4 0v2\"/><rect width=\"8\" height=\"5\" x=\"14\" y=\"6\" rx=\"1\"/></g>"
	},
	eclipse: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a7 7 0 1 0 10 10\"/></g>"
	},
	egg: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22c6.23-.05 7.87-5.57 7.5-10c-.36-4.34-3.95-9.96-7.5-10c-3.55.04-7.14 5.66-7.5 10c-.37 4.43 1.27 9.95 7.5 10\"/>"
	},
	"egg-fried": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11.5\" cy=\"12.5\" r=\"3.5\"/><path d=\"M3 8c0-3.5 2.5-6 6.5-6c5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5c-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8\"/></g>"
	},
	"egg-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10c3.256-.026 5.259-1.547 6.375-3.625m1.157-4.5A14 14 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10c-1.04.012-2.082.502-3.046 1.297M2 2l20 20\"/>"
	},
	ellipsis: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/></g>"
	},
	"ellipsis-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/></g>"
	},
	equal: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 9h14M5 15h14\"/>"
	},
	"equal-approximately": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 15a6.5 6.5 0 0 1 7 0a6.5 6.5 0 0 0 7 0M5 9a6.5 6.5 0 0 1 7 0a6.5 6.5 0 0 0 7 0\"/>"
	},
	"equal-not": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 9h14M5 15h14m0-10L5 19\"/>"
	},
	eraser: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 21l-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21m9 0H7M5 11l9 9\"/>"
	},
	"ethernet-port": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 20l3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3zM6 8v1m4-1v1m4-1v1m4-1v1\"/>"
	},
	euro: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 10h12M4 14h9m6-8a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8c2 0 3.8-.8 5.2-2\"/>"
	},
	expand: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 15l6 6M15 9l6-6m0 13.2V21h-4.8M21 7.8V3h-4.8M3 16.2V21h4.8M3 21l6-6M3 7.8V3h4.8M9 9L3 3\"/>"
	},
	"external-link": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>"
	},
	eye: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
	},
	"eye-closed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 18l-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25\"/>"
	},
	"eye-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242\"/><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20\"/></g>"
	},
	facebook: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"/>"
	},
	factory: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm15-2h1m-6 0h1m-6 0h1\"/>"
	},
	fan: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618zM12 12v.01\"/>"
	},
	"fast-forward": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m13 19l9-7l-9-7zM2 19l9-7l-9-7z\"/>"
	},
	feather: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9\"/>"
	},
	fence: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 3L2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4M6 18h4m2-15l-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4m-4 10h4m2-15l-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"/>"
	},
	"ferris-wheel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M12 2v4m-5.2 9l-3.5 2M20.7 7l-3.5 2M6.8 9L3.3 7m17.4 10l-3.5-2M9 22l3-8l3 8m-7 0h8\"/><path d=\"M18 18.7a9 9 0 1 0-12 0\"/></g>"
	},
	figma: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z\"/><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5\"/></g>"
	},
	file: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/></g>"
	},
	"file-archive": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4\"/><path d=\"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01\"/><circle cx=\"10\" cy=\"20\" r=\"2\"/></g>"
	},
	"file-audio": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0\"/></g>"
	},
	"file-audio-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><circle cx=\"3\" cy=\"17\" r=\"1\"/><path d=\"M2 17v-3a4 4 0 0 1 8 0v3\"/><circle cx=\"9\" cy=\"17\" r=\"1\"/></g>"
	},
	"file-axis-3d": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 18l4-4m-4-4v8h8\"/></g>"
	},
	"file-badge": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M5 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path d=\"M7 16.5L8 22l-3-1l-3 1l1-5.5\"/></g>"
	},
	"file-badge-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-6 4.5l1 5.5l-3-1l-3 1l1-5.5\"/></g>"
	},
	"file-box": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01ZM7 17v5\"/><path d=\"M11.7 14.2L7 17l-4.7-2.8\"/></g>"
	},
	"file-chart-column": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 18v-1m4 1v-6m4 6v-3\"/></g>"
	},
	"file-chart-column-increasing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 18v-2m4 2v-4m4 4v-6\"/></g>"
	},
	"file-chart-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-4 5l-3.5 3.5l-2-2L8 17\"/></g>"
	},
	"file-chart-pie": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475\"/><path d=\"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z\"/></g>"
	},
	"file-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M9 15l2 2l4-4\"/></g>"
	},
	"file-check-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M3 15l2 2l4-4\"/></g>"
	},
	"file-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><circle cx=\"8\" cy=\"16\" r=\"6\"/><path d=\"M9.5 17.5L8 16.25V14\"/></g>"
	},
	"file-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"/></g>"
	},
	"file-code-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M5 12l-3 3l3 3m4 0l3-3l-3-3\"/></g>"
	},
	"file-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4M3.2 12.9l-.9-.4m.9 2.6l-.9.4\"/><path d=\"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5m.9 4.7l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9m2.6-4.3l-.9.4m.9 2.6l-.9-.4\"/><circle cx=\"6\" cy=\"14\" r=\"3\"/></g>"
	},
	"file-diff": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-6 8h6m-3 3V7M9 17h6\"/>"
	},
	"file-digit": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><rect width=\"4\" height=\"6\" x=\"2\" y=\"12\" rx=\"2\"/><path d=\"M10 12h2v6m-2 0h4\"/></g>"
	},
	"file-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3\"/></g>"
	},
	"file-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-9.71 2.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34l-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53c-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z\"/></g>"
	},
	"file-image": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><path d=\"m20 17l-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22\"/></g>"
	},
	"file-input": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3\"/></g>"
	},
	"file-json": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-10 4a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"/></g>"
	},
	"file-json-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"/></g>"
	},
	"file-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><circle cx=\"10\" cy=\"16\" r=\"2\"/><path d=\"m16 10l-4.5 4.5M15 11l1 1\"/></g>"
	},
	"file-key-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><circle cx=\"4\" cy=\"16\" r=\"2\"/><path d=\"m10 10l-4.5 4.5M9 11l1 1\"/></g>"
	},
	"file-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><rect width=\"8\" height=\"6\" x=\"8\" y=\"12\" rx=\"1\"/><path d=\"M10 12v-2a2 2 0 1 1 4 0v2\"/></g>"
	},
	"file-lock-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><rect width=\"8\" height=\"5\" x=\"2\" y=\"13\" rx=\"1\"/><path d=\"M8 13v-2a2 2 0 1 0-4 0v2\"/></g>"
	},
	"file-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M9 15h6\"/></g>"
	},
	"file-minus-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M3 15h6\"/></g>"
	},
	"file-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4\"/><path d=\"M8 18v-7.7L16 9v7\"/><circle cx=\"14\" cy=\"16\" r=\"2\"/><circle cx=\"6\" cy=\"18\" r=\"2\"/></g>"
	},
	"file-output": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2\"/><path d=\"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3\"/><path d=\"m5 17l-3-3h10\"/></g>"
	},
	"file-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-6.622 7.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/></g>"
	},
	"file-pen-line": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m18 5l-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2\"/><path d=\"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506zM8 18h1\"/></g>"
	},
	"file-pie-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475\"/><path d=\"M8 16v-6a6 6 0 0 1 6 6z\"/></g>",
		hidden: true
	},
	"file-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M9 15h6m-3 3v-6\"/></g>"
	},
	"file-plus-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M3 15h6m-3-3v6\"/></g>"
	},
	"file-question": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"/><path d=\"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3\"/></g>"
	},
	"file-scan": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-4 6a2 2 0 0 0-2 2m6-2a2 2 0 0 1 2 2m-2 6a2 2 0 0 0 2-2m-6 2a2 2 0 0 1-2-2\"/></g>"
	},
	"file-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m5 11l-1.5-1.5\"/><circle cx=\"5\" cy=\"14\" r=\"3\"/></g>"
	},
	"file-search-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><circle cx=\"11.5\" cy=\"14.5\" r=\"2.5\"/><path d=\"M13.3 16.3L15 18\"/></g>"
	},
	"file-sliders": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 12h8m-6-1v2m-2 4h8m-2-1v2\"/></g>"
	},
	"file-spreadsheet": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 13h2m4 0h2m-8 4h2m4 0h2\"/></g>"
	},
	"file-stack": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 7h-3a2 2 0 0 1-2-2V2\"/><path d=\"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z\"/><path d=\"M7 8v8.8c0 .3.2.6.4.8s.5.4.8.4H15\"/><path d=\"M3 12v8.8c0 .3.2.6.4.8s.5.4.8.4H11\"/></g>"
	},
	"file-symlink": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 18l3-3l-3-3m4-10v4a2 2 0 0 0 2 2h4\"/><path d=\"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"/></g>"
	},
	"file-terminal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 16l2-2l-2-2m4 6h4\"/></g>"
	},
	"file-text": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8\"/></g>"
	},
	"file-type": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M9 13v-1h6v1m-3-1v6m-1 0h2\"/></g>"
	},
	"file-type-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M2 13v-1h6v1m-3-1v6m-1 0h2\"/></g>"
	},
	"file-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-8 4v6m3-3l-3-3l-3 3\"/></g>"
	},
	"file-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-5 10a3 3 0 1 0-6 0\"/><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"/><circle cx=\"12\" cy=\"13\" r=\"2\"/></g>"
	},
	"file-video": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-10 3l5 3l-5 3z\"/></g>"
	},
	"file-video-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><rect width=\"8\" height=\"6\" x=\"2\" y=\"12\" rx=\"1\"/><path d=\"m10 15.5l4 2.5v-6l-4 2.5\"/></g>"
	},
	"file-volume": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 11a5 5 0 0 1 0 6m3-15v4a2 2 0 0 0 2 2h4\"/><path d=\"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23\"/><path d=\"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z\"/></g>"
	},
	"file-volume-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 15h.01m3.49-1.5a2.5 2.5 0 0 1 0 3M15 12a5 5 0 0 1 0 6\"/></g>"
	},
	"file-warning": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-3 7v4m0 4h.01\"/>"
	},
	"file-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4m-5.5 4.5l-5 5m0-5l5 5\"/></g>"
	},
	"file-x-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M8 12.5l-5 5m0-5l5 5\"/></g>"
	},
	files: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 7h-3a2 2 0 0 1-2-2V2\"/><path d=\"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z\"/><path d=\"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8\"/></g>"
	},
	film: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4\"/></g>"
	},
	filter: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 3H2l8 9.46V19l4 2v-8.54z\"/>"
	},
	"filter-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055M22 3l-5 5m0-5l5 5\"/>"
	},
	fingerprint: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6\"/><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2\"/></g>"
	},
	"fire-extinguisher": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5M9 18h8m1-15h-3\"/><path d=\"M11 3a6 6 0 0 0-6 6v11m0-7h4m8-3a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z\"/></g>"
	},
	fish: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6.5 12c.94-3.46 4.94-6 8.5-6s6.06 2.54 7 6c-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6M18 12v.5\"/><path d=\"M16 17.93a9.77 9.77 0 0 1 0-11.86m-9 4.6C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5c-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33\"/><path d=\"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m0 11.86l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98\"/></g>"
	},
	"fish-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 12.47v.03m0-.5v.47m-.475 5.056A6.7 6.7 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6c.348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.8 8.8 0 0 1 15 6c3.56 0 6.06 2.54 7 6c-.309 1.14-.786 2.177-1.413 3.058\"/><path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5c-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.8 9.8 0 0 1 16 6.07m0 11.86a9.8 9.8 0 0 1-1.728-3.618\"/><path d=\"m16.01 17.93l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20\"/></g>"
	},
	"fish-symbol": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 16s9-15 20-4C11 23 2 8 2 8\"/>"
	},
	flag: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 15s1-1 4-1s5 2 8 2s4-1 4-1V3s-1 1-4 1s-5-2-8-2s-4 1-4 1zm0 7v-7\"/>"
	},
	"flag-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2c3 0 5 2 8 2s4-1 4-1v11M4 22V4m0 11s1-1 4-1s5 2 8 2M2 2l20 20\"/>"
	},
	"flag-triangle-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 22V2L7 7l10 5\"/>"
	},
	"flag-triangle-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 22V2l10 5l-10 5\"/>"
	},
	flame: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3c-1.072-2.143-.224-4.054 2-6c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5\"/>"
	},
	"flame-kindling": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2M5 22l14-4M5 18l14 4\"/>"
	},
	flashlight: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12zM6 6h12m-6 6\"/>"
	},
	"flashlight-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4m1-4h11v4c0 2-2 2-2 4v1m-5-5h7M2 2l20 20\"/>"
	},
	"flask-conical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7\"/>"
	},
	"flask-conical-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2v2.343M14 2v6.343M2 2l20 20m-2-2a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563M6.453 15H15M8.5 2h7\"/>"
	},
	"flask-round": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7\"/>"
	},
	"flip-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3m8-18h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3m-4-1v2m0-8v2m0-8v2m0-8v2\"/>"
	},
	"flip-horizontal-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 7l5 5l-5 5zm18 0l-5 5l5 5zm-9 13v2m0-8v2m0-8v2m0-8v2\"/>"
	},
	"flip-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 8v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3m1-4H2m8 0H8m8 0h-2m8 0h-2\"/>"
	},
	"flip-vertical-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m17 3l-5 5l-5-5zm0 18l-5-5l-5 5zM4 12H2m8 0H8m8 0h-2m8 0h-2\"/>"
	},
	flower: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16\"/></g>"
	},
	"flower-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5\"/></g>"
	},
	focus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/></g>"
	},
	"fold-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12h6m14 0h-6M12 2v2m0 4v2m0 4v2m0 4v2m7-13l-3 3l3 3M5 15l3-3l-3-3\"/>"
	},
	"fold-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22v-6m0-8V2M4 12H2m8 0H8m8 0h-2m8 0h-2m-5 7l-3-3l-3 3m6-14l-3 3l-3-3\"/>"
	},
	folder: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>"
	},
	"folder-archive": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"15\" cy=\"19\" r=\"2\"/><path d=\"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1m5.9-9v-1m0 7v-2\"/></g>"
	},
	"folder-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"m9 13l2 2l4-4\"/></g>"
	},
	"folder-clock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"16\" cy=\"16\" r=\"6\"/><path d=\"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2m-6 6v2l1 1\"/></g>"
	},
	"folder-closed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2ZM2 10h20\"/>"
	},
	"folder-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 10.5L8 13l2 2.5m4-5l2 2.5l-2 2.5\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z\"/></g>"
	},
	"folder-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3m-.3 8.1l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4\"/></g>"
	},
	"folder-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2\"/><circle cx=\"12\" cy=\"13\" r=\"1\"/></g>"
	},
	"folder-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-8-10v6\"/><path d=\"m15 13l-3 3l-3-3\"/></g>"
	},
	"folder-git": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"2\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-6-7h3M7 13h3\"/></g>"
	},
	"folder-git-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\"/><circle cx=\"13\" cy=\"12\" r=\"2\"/><path d=\"M18 19c-2.8 0-5-2.2-5-5v8\"/><circle cx=\"20\" cy=\"19\" r=\"2\"/></g>"
	},
	"folder-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5\"/><path d=\"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34l.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z\"/></g>"
	},
	"folder-input": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1m0-4h10\"/><path d=\"m9 16l3-3l-3-3\"/></g>"
	},
	"folder-kanban": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2m4-10v4m4-4v2m4-2v6\"/>"
	},
	"folder-key": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"16\" cy=\"20\" r=\"2\"/><path d=\"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2m0 4l-4.5 4.5M21 15l1 1\"/></g>"
	},
	"folder-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"5\" x=\"14\" y=\"17\" rx=\"1\"/><path d=\"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5\"/><path d=\"M20 17v-2a2 2 0 1 0-4 0v2\"/></g>"
	},
	"folder-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 13h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>"
	},
	"folder-open": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\"/>"
	},
	"folder-open-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2\"/><circle cx=\"14\" cy=\"15\" r=\"1\"/></g>"
	},
	"folder-output": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5M2 13h10\"/><path d=\"m5 10l-3 3l3 3\"/></g>"
	},
	"folder-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5\"/><path d=\"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/></g>"
	},
	"folder-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>"
	},
	"folder-root": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2\"/><circle cx=\"12\" cy=\"13\" r=\"2\"/><path d=\"M12 15v5\"/></g>"
	},
	"folder-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1M21 21l-1.9-1.9\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/></g>"
	},
	"folder-search-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11.5\" cy=\"12.5\" r=\"2.5\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-6.7-5.7L15 16\"/></g>"
	},
	"folder-symlink": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"/><path d=\"m8 16l3-3l-3-3\"/></g>"
	},
	"folder-sync": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5\"/><path d=\"M12 10v4h4\"/><path d=\"m12 14l1.535-1.605a5 5 0 0 1 8 1.5M22 22v-4h-4\"/><path d=\"m22 18l-1.535 1.605a5 5 0 0 1-8-1.5\"/></g>"
	},
	"folder-tree": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Zm0 11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1ZM3 5a2 2 0 0 0 2 2h3\"/><path d=\"M3 3v13a2 2 0 0 0 2 2h3\"/></g>"
	},
	"folder-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-8-10v6\"/><path d=\"m9 13l3-3l3 3\"/></g>"
	},
	"folder-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2ZM9.5 10.5l5 5m0-5l-5 5\"/>"
	},
	folders: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z\"/><path d=\"M2 8v11a2 2 0 0 0 2 2h14\"/></g>"
	},
	footprints: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4\"/>"
	},
	forklift: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 12H5a2 2 0 0 0-2 2v5\"/><circle cx=\"13\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><path d=\"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5\"/></g>"
	},
	forward: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 17l5-5l-5-5\"/><path d=\"M4 18v-2a4 4 0 0 1 4-4h12\"/></g>"
	},
	frame: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 6H2m20 12H2M6 2v20M18 2v20\"/>"
	},
	framer: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"/>"
	},
	frown: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 16s-1.5-2-4-2s-4 2-4 2m1-7h.01M15 9h.01\"/></g>"
	},
	fuel: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 22h12M4 9h10m0 13V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18m10-9h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5\"/>"
	},
	fullscreen: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/><rect width=\"10\" height=\"8\" x=\"7\" y=\"8\" rx=\"1\"/></g>"
	},
	"gallery-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 3v18\"/><rect width=\"12\" height=\"18\" x=\"6\" y=\"3\" rx=\"2\"/><path d=\"M22 3v18\"/></g>"
	},
	"gallery-horizontal-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 7v10M6 5v14\"/><rect width=\"12\" height=\"18\" x=\"10\" y=\"3\" rx=\"2\"/></g>"
	},
	"gallery-thumbnails": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"14\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M4 21h1m4 0h1m4 0h1m4 0h1\"/></g>"
	},
	"gallery-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 2h18\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"6\" rx=\"2\"/><path d=\"M3 22h18\"/></g>"
	},
	"gallery-vertical-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 2h10M5 6h14\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/></g>"
	},
	gamepad: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 12h4m-2-2v4m7-1h.01M18 11h.01\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	"gamepad-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5\"/>"
	},
	gauge: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0\"/>"
	},
	gavel: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m14.5 12.5l-8 8a2.119 2.119 0 1 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8m4-4l-8-8\"/>"
	},
	gem: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 3h12l4 6l-10 13L2 9Z\"/><path d=\"M11 3L8 9l4 13l4-13l-3-6M2 9h20\"/></g>"
	},
	ghost: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8\"/>"
	},
	gift: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"4\" x=\"3\" y=\"8\" rx=\"1\"/><path d=\"M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5\"/></g>"
	},
	"git-branch": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 3v12\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M18 9a9 9 0 0 1-9 9\"/></g>"
	},
	"git-branch-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 3v12m12-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><path d=\"M15 6a9 9 0 0 0-9 9m12 0v6m3-3h-6\"/></g>"
	},
	"git-commit-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M3 12h6m6 0h6\"/></g>"
	},
	"git-commit-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3v6\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 15v6\"/></g>"
	},
	"git-compare": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7m-7 3H8a2 2 0 0 1-2-2V9\"/></g>"
	},
	"git-compare-arrows": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v7\"/><path d=\"m15 9l-3-3l3-3\"/><circle cx=\"19\" cy=\"18\" r=\"3\"/><path d=\"M12 18H7a2 2 0 0 1-2-2V9\"/><path d=\"m9 15l3 3l-3 3\"/></g>"
	},
	"git-fork": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9m6 3v3\"/></g>"
	},
	"git-graph": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v6\"/><circle cx=\"5\" cy=\"18\" r=\"3\"/><path d=\"M12 3v18\"/><circle cx=\"19\" cy=\"6\" r=\"3\"/><path d=\"M16 15.7A9 9 0 0 0 19 9\"/></g>"
	},
	"git-merge": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 21V9a9 9 0 0 0 9 9\"/></g>"
	},
	"git-pull-request": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7M6 9v12\"/></g>"
	},
	"git-pull-request-arrow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v12\"/><circle cx=\"19\" cy=\"18\" r=\"3\"/><path d=\"m15 9l-3-3l3-3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v7\"/></g>"
	},
	"git-pull-request-closed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 9v12M21 3l-6 6m6 0l-6-6m3 8.5V15\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/></g>"
	},
	"git-pull-request-create": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 9v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6\"/></g>"
	},
	"git-pull-request-create-arrow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v12M15 9l-3-3l3-3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6\"/></g>"
	},
	"git-pull-request-draft": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M18 6V5m0 6v-1M6 9v12\"/></g>"
	},
	github: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4\"/><path d=\"M9 18c-4.51 2-5-2-7-2\"/></g>"
	},
	gitlab: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m22 13.29l-3.33-10a.4.4 0 0 0-.14-.18a.38.38 0 0 0-.22-.11a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18a.38.38 0 0 0-.26-.08a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83\"/>"
	},
	"glass-water": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z\"/><path d=\"M6 12a5 5 0 0 1 6 0a5 5 0 0 0 6 0\"/></g>"
	},
	glasses: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"15\" r=\"4\"/><circle cx=\"18\" cy=\"15\" r=\"4\"/><path d=\"M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2\"/></g>"
	},
	globe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20\"/></g>"
	},
	"globe-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20a10 10 0 1 0 9.542 13M2 12h8.5M20 6V4a2 2 0 1 0-4 0v2\"/><rect width=\"8\" height=\"5\" x=\"14\" y=\"6\" rx=\"1\"/></g>"
	},
	goal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13V2l8 4l-8 4\"/><path d=\"M20.561 10.222a9 9 0 1 1-12.55-5.29\"/><path d=\"M8.002 9.997a5 5 0 1 0 8.9 2.02\"/></g>"
	},
	grab: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0-.1V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5m0 0a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/><path d=\"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8a2 2 0 1 1 4 0\"/></g>"
	},
	"graduation-cap": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/></g>"
	},
	grape: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 5V2l-5.89 5.89\"/><circle cx=\"16.6\" cy=\"15.89\" r=\"3\"/><circle cx=\"8.11\" cy=\"7.4\" r=\"3\"/><circle cx=\"12.35\" cy=\"11.65\" r=\"3\"/><circle cx=\"13.91\" cy=\"5.85\" r=\"3\"/><circle cx=\"18.15\" cy=\"10.09\" r=\"3\"/><circle cx=\"6.56\" cy=\"13.2\" r=\"3\"/><circle cx=\"10.8\" cy=\"17.44\" r=\"3\"/><circle cx=\"5\" cy=\"19\" r=\"3\"/></g>"
	},
	"grid-2x2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3v18m-9-9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"grid-2x2-check": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7l2 2l4-4\"/>"
	},
	"grid-2x2-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7h6m-3 3v-6\"/>"
	},
	"grid-2x2-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 4l5 5m-5 0l5-5\"/>"
	},
	"grid-3x3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18M3 15h18M9 3v18m6-18v18\"/></g>"
	},
	grip: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"19\" cy=\"5\" r=\"1\"/><circle cx=\"5\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><circle cx=\"19\" cy=\"19\" r=\"1\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/></g>"
	},
	"grip-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"9\" r=\"1\"/><circle cx=\"19\" cy=\"9\" r=\"1\"/><circle cx=\"5\" cy=\"9\" r=\"1\"/><circle cx=\"12\" cy=\"15\" r=\"1\"/><circle cx=\"19\" cy=\"15\" r=\"1\"/><circle cx=\"5\" cy=\"15\" r=\"1\"/></g>"
	},
	"grip-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"9\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"5\" r=\"1\"/><circle cx=\"9\" cy=\"19\" r=\"1\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><circle cx=\"15\" cy=\"19\" r=\"1\"/></g>"
	},
	group: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 7V5c0-1.1.9-2 2-2h2m10 0h2c1.1 0 2 .9 2 2v2m0 10v2c0 1.1-.9 2-2 2h-2M7 21H5c-1.1 0-2-.9-2-2v-2\"/><rect width=\"7\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"10\" y=\"12\" rx=\"1\"/></g>"
	},
	guitar: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m11.9 12.1l4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM6 16l2 2m.2-8.1C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5c0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4a2 2 0 0 0 1.8-1.2z\"/><circle cx=\"11.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"/></g>"
	},
	ham: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856\"/><path d=\"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288m3.421-10.709L18.6 8.4a2.501 2.501 0 1 0 1.65-4.65a2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025M8.5 16.5l-1-1\"/></g>"
	},
	hammer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 12l-8.373 8.373a1 1 0 1 1-3-3L12 9m6 6l4-4\"/><path d=\"m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\"/></g>"
	},
	hand: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\"/><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/></g>"
	},
	"hand-coins": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"/><path d=\"m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6\"/><circle cx=\"16\" cy=\"9\" r=\"2.9\"/><circle cx=\"6\" cy=\"5\" r=\"3\"/></g>"
	},
	"hand-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"/><path d=\"m7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 15l6 6\"/><path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\"/></g>"
	},
	"hand-helping": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14\"/><path d=\"m7 18l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 13l6 6\"/></g>"
	},
	"hand-metal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V9a2 2 0 1 0-4 0v2m0-.5V5a2 2 0 1 0-4 0v9\"/><path d=\"m7 15l-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5\"/></g>"
	},
	"hand-platter": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3V2m3.4 15.4l3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5\"/><path d=\"M2 14h12a2 2 0 0 1 0 4h-2m-8-8h16M5 10a7 7 0 0 1 14 0\"/><path d=\"M5 14v6a1 1 0 0 1-1 1H2\"/></g>"
	},
	handshake: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m11 17l2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8\"/></g>"
	},
	"hard-drive": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01\"/>"
	},
	"hard-drive-download": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 2v8m4-4l-4 4l-4-4\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h.01M10 18h.01\"/></g>"
	},
	"hard-drive-upload": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m16 6l-4-4l-4 4m4-4v8\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h.01M10 18h.01\"/></g>"
	},
	"hard-hat": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6\"/><rect width=\"20\" height=\"4\" x=\"2\" y=\"15\" rx=\"1\"/></g>"
	},
	hash: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 9h16M4 15h16M10 3L8 21m8-18l-2 18\"/>"
	},
	haze: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5.2 6.2l1.4 1.4M2 13h2m16 0h2m-4.6-5.4l1.4-1.4M22 17H2m20 4H2m14-8a4 4 0 0 0-8 0m4-8V2.5\"/>"
	},
	"hdmi-port": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1ZM7.5 12h9\"/>"
	},
	heading: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 12h12M6 20V4m12 16V4\"/>"
	},
	"heading-1": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12h8m-8 6V6m8 12V6m5 6l3-2v8\"/>"
	},
	"heading-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6c0-1.5-2-2.5-4-1\"/>"
	},
	"heading-3": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12h8m-8 6V6m8 12V6m5.5 4.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2m-2 3.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2\"/>"
	},
	"heading-4": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 18V6m5 4v3a1 1 0 0 0 1 1h3m0-4v8M4 12h8m-8 6V6\"/>"
	},
	"heading-5": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12h8m-8 6V6m8 12V6m5 7v-3h4m-4 7.7c.4.2.8.3 1.3.3c1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17\"/>"
	},
	"heading-6": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 12h8m-8 6V6m8 12V6\"/><circle cx=\"19\" cy=\"16\" r=\"2\"/><path d=\"M20 10c-2 2-3 3.5-3 6\"/></g>"
	},
	"headphone-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 14h-1.343M9.128 3.47A9 9 0 0 1 21 12v3.343M2 2l20 20m-1.586-1.586A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364\"/>"
	},
	headphones: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\"/>"
	},
	headset: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z\"/><path d=\"M21 16v2a4 4 0 0 1-4 4h-5\"/></g>"
	},
	heart: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>"
	},
	"heart-crack": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"m12 13l-1-1l2-2l-3-3l2-2\"/></g>"
	},
	"heart-handshake": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M12 5L9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66M18 15l-2-2m-1 5l-2-2\"/></g>"
	},
	"heart-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m2 2l20 20m-5.5-5.5L12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35M8.76 3.1c1.15.22 2.13.78 3.24 1.9c1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17\"/>"
	},
	"heart-pulse": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M3.22 12H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27\"/></g>"
	},
	heater: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 8c2-3-2-3 0-6m4.5 6c2-3-2-3 0-6M6 10h.01M6 14h.01M10 16v-4m4 4v-4m4 4v-4\"/><path d=\"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M5 20v2m14-2v2\"/></g>"
	},
	hexagon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16\"/>"
	},
	highlighter: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 11l-6 6v3h9l3-3\"/><path d=\"m22 12l-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4\"/></g>"
	},
	history: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5m4-1v5l4 2\"/></g>"
	},
	hop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85c.55.03 1-.42.97-.97c-.06-1.27-.26-3.5-.85-5.18M11.5 6.5c1.64 0 5-.38 6.71-1.07c.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12c.69-1.71 1.07-5.07 1.07-6.71c1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88\"/><path d=\"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7a16.6 16.6 0 0 1-4.08-1.36\"/><path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96a17.7 17.7 0 0 0-.9-4.87\"/><path d=\"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9a16.6 16.6 0 0 0-1.36-4.08\"/><path d=\"M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5a.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57M4.93 4.93L3 3a.7.7 0 0 1 0-1m6.58 10.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68a20.8 20.8 0 0 1-4.5-3.15\"/></g>"
	},
	"hop-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85c.28.01.53-.09.7-.27\"/><path d=\"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37c.46.06.86-.25.9-.71c.12-1.52-.3-3.43-.5-4.28\"/><path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5a.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25\"/><path d=\"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08c.04.3-.08.59-.31.75M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12c.69-1.71 1.07-5.07 1.07-6.71c1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24\"/><path d=\"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28m-1.23-9.5a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17c-1.5.6-4.3.98-6.07 1.05M2 2l20 20\"/></g>"
	},
	hospital: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 6v4m2 4h-4m4 4h-4m4-10h-4m8 4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2\"/><path d=\"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18\"/></g>"
	},
	hotel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/></g>"
	},
	hourglass: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\"/>"
	},
	house: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></g>"
	},
	"house-plug": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 12V8.964M14 12V8.964M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z\"/><path d=\"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2\"/></g>"
	},
	"house-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354\"/><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8m6-15h6m-3-3v6\"/></g>"
	},
	"house-wifi": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9.5 13.866a4 4 0 0 1 5 .01M12 17h.01\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M7 10.754a8 8 0 0 1 10 0\"/></g>"
	},
	"ice-cream-bowl": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0\"/><path d=\"M12.14 11a3.5 3.5 0 1 1 6.71 0\"/><path d=\"M15.5 6.5a3.5 3.5 0 1 0-7 0\"/></g>"
	},
	"ice-cream-cone": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 11l4.08 10.35a1 1 0 0 0 1.84 0L17 11m0-4A5 5 0 0 0 7 7m10 0a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4\"/>"
	},
	"id-card": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/></g>"
	},
	image: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/></g>"
	},
	"image-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21\"/><path d=\"m14 19l3 3v-5.5m0 5.5l3-3\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/></g>"
	},
	"image-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 2h6\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/></g>"
	},
	"image-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 2l20 20M10.41 10.41a2 2 0 1 1-2.83-2.83m5.92 5.92L6 21m12-9l3 3\"/><path d=\"M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59M21 15V5a2 2 0 0 0-2-2H9\"/></g>"
	},
	"image-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m11 16l-5 5m5 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5\"/><path d=\"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/></g>"
	},
	"image-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5\"/><path d=\"m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/></g>"
	},
	"image-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21\"/><path d=\"m14 19.5l3-3l3 3M17 22v-5.5\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/></g>"
	},
	"image-upscale": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 3h5v5m-4 13h2a2 2 0 0 0 2-2m0-7v3m0-12l-5 5M3 7V5a2 2 0 0 1 2-2m0 18l4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3\"/><rect width=\"10\" height=\"10\" x=\"3\" y=\"11\" rx=\"1\"/></g>"
	},
	images: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 22H4a2 2 0 0 1-2-2V6\"/><path d=\"m22 13l-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><rect width=\"16\" height=\"16\" x=\"6\" y=\"2\" rx=\"2\"/></g>"
	},
	"import": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3v12m-4-4l4 4l4-4\"/><path d=\"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4\"/></g>"
	},
	inbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 12h-6l-2 3h-4l-2-3H2\"/><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11\"/></g>"
	},
	"indent-decrease": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12H11m10 6H11M21 6H11M7 8l-4 4l4 4\"/>"
	},
	"indent-increase": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12H11m10 6H11M21 6H11M3 8l4 4l-4 4\"/>"
	},
	"indian-rupee": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 3h12M6 8h12M6 13l8.5 8M6 13h3m0 0c6.667 0 6.667-10 0-10\"/>"
	},
	infinity: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4m0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4\"/>"
	},
	info: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4m0-4h.01\"/></g>"
	},
	"inspection-panel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7h.01M17 7h.01M7 17h.01M17 17h.01\"/></g>"
	},
	instagram: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01\"/></g>"
	},
	italic: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 4h-9m4 16H5M15 4L9 20\"/>"
	},
	"iteration-ccw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8h8\"/><path d=\"m16 14l4 4l-4 4\"/></g>"
	},
	"iteration-cw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8H4\"/><path d=\"m8 22l-4-4l4-4\"/></g>"
	},
	"japanese-yen": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9.5V21m0-11.5L6 3m6 6.5L18 3M6 15h12M6 11h12\"/>"
	},
	joystick: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM6 15v-2m6 2V9\"/><circle cx=\"12\" cy=\"6\" r=\"3\"/></g>"
	},
	kanban: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 5v11m6-11v6m6-6v14\"/>"
	},
	key: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6\"/><circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"/></g>"
	},
	"key-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/></g>"
	},
	"key-square": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4zM14 7l3 3m-7.6.6l-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814\"/>"
	},
	keyboard: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01\"/><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/></g>"
	},
	"keyboard-music": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 8h4m4 0h.01M18 8h.01M2 12h20M6 12v4m4-4v4m4-4v4m4-4v4\"/></g>"
	},
	"keyboard-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 4a2 2 0 0 1 2 2m0 0v10.41M7 16h9M9.69 4H20m-6 4h.01M18 8h.01M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 4h.01M8 12h.01\"/>"
	},
	lamp: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2h8l4 10H4zm4 10v6m-4 4v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2z\"/>"
	},
	"lamp-ceiling": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v5M6 7h12l4 9H2zm3.17 9a3 3 0 1 0 5.66 0\"/>"
	},
	"lamp-desk": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14 5l-3 3l2 7l8-8z\"/><path d=\"m14 5l-3 3l-3-3l3-3z\"/><path d=\"M9.5 6.5L4 12l3 6m-4 4v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2z\"/></g>"
	},
	"lamp-floor": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 2h6l3 7H6zm3 7v13m-3 0h6\"/>"
	},
	"lamp-wall-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 13h6l3 7H8zm3 0V8a2 2 0 0 0-2-2H8M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4z\"/>"
	},
	"lamp-wall-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 4h6l3 7H8zm3 7v5a2 2 0 0 1-2 2H8m-4-3h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4z\"/>"
	},
	"land-plot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 8l6-3l-6-3v10\"/><path d=\"m8 11.99l-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12m-9.51.85l11.02 6.3m0-6.3L6.5 19.15\"/></g>"
	},
	landmark: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7m-6-9l8 5H4z\"/>"
	},
	languages: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6\"/>"
	},
	laptop: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16\"/>"
	},
	"laptop-minimal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"12\" x=\"3\" y=\"4\" rx=\"2\" ry=\"2\"/><path d=\"M2 20h20\"/></g>"
	},
	"laptop-minimal-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 20h20M9 10l2 2l4-4\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"4\" rx=\"2\"/></g>"
	},
	lasso: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 22a5 5 0 0 1-2-4m-1.7-4A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8s-4.5 8-10 8a12 12 0 0 1-5-1\"/><path d=\"M5 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/></g>"
	},
	"lasso-select": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 22a5 5 0 0 1-2-4m2-1.07c.96.43 1.96.74 2.99.91M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.2 7.2 0 0 1-.33 2\"/><path d=\"M5 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.33 4h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14\"/></g>"
	},
	laugh: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M18 13a6 6 0 0 1-6 5a6 6 0 0 1-6-5zM9 9h.01M15 9h.01\"/></g>"
	},
	layers: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/></g>"
	},
	"layers-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m16.02 12l5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12\"/><path d=\"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z\"/></g>"
	},
	"layers-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\"/><path d=\"m6.08 9.5l-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59\"/><path d=\"m6.08 14.5l-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59\"/></g>",
		hidden: true
	},
	"layout-dashboard": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/></g>"
	},
	"layout-grid": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/></g>"
	},
	"layout-list": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><path d=\"M14 4h7m-7 5h7m-7 6h7m-7 5h7\"/></g>"
	},
	"layout-panel-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/></g>"
	},
	"layout-panel-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/></g>"
	},
	"layout-template": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"9\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><rect width=\"5\" height=\"7\" x=\"16\" y=\"14\" rx=\"1\"/></g>"
	},
	leaf: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/></g>"
	},
	"leafy-green": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5a4 4 0 0 0 6.187-2.353a3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8A3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373a3.5 3.5 0 0 0-5.116 3.69a4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1C3.926 19.743 3.014 20.732 2 22m0 0L17 7\"/>"
	},
	lectern: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3\"/><path d=\"M18 6V3a1 1 0 0 0-1-1h-3\"/><rect width=\"8\" height=\"12\" x=\"8\" y=\"10\" rx=\"1\"/></g>"
	},
	"letter-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12h6m-6-6h6M3 13l3.553-7.724a.5.5 0 0 1 .894 0L11 13m-8 5h18M4 11h6\"/>"
	},
	library: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 6l4 14M12 6v14M8 8v12M4 4v16\"/>"
	},
	"library-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"M7 3v18m13.4-2.1c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z\"/></g>"
	},
	"life-buoy": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93l4.24 4.24m5.66 0l4.24-4.24m-4.24 9.9l4.24 4.24m-9.9-4.24l-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></g>"
	},
	ligature: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 20V8c0-2.2 1.8-4 4-4c1.5 0 2.8.8 3.5 2M6 12h4m4 0h2v8M6 20h4m4 0h4\"/>"
	},
	lightbulb: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4\"/>"
	},
	"lightbulb-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5M2 2l20 20M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4\"/>"
	},
	"line-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 3v18h18\"/><path d=\"m19 9l-5 5l-4-4l-3 3\"/></g>",
		hidden: true
	},
	link: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/></g>"
	},
	"link-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 1 1 0 10h-2m-7-5h8\"/>"
	},
	"link-2-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17H7A5 5 0 0 1 7 7m8 0h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20\"/>"
	},
	linkedin: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/></g>"
	},
	list: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13\"/>"
	},
	"list-check": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 18H3m12 0l2 2l4-4m-5-4H3m13-6H3\"/>"
	},
	"list-checks": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8\"/>"
	},
	"list-collapse": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 10l2.5-2.5L3 5m0 14l2.5-2.5L3 14m7-8h11m-11 6h11m-11 6h11\"/>"
	},
	"list-end": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 12H3m13-6H3m7 12H3M21 6v10a2 2 0 0 1-2 2h-5\"/><path d=\"m16 16l-2 2l2 2\"/></g>"
	},
	"list-filter": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 6h18M7 12h10m-7 6h4\"/>"
	},
	"list-filter-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 18h4M11 6H3m12 0h6m-3 3V3M7 12h8\"/>"
	},
	"list-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 12H3m13-6H3m13 12H3m18-6h-6\"/>"
	},
	"list-music": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15V6m-2.5 12a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 12H3m13-6H3m9 12H3\"/>"
	},
	"list-ordered": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 12h11m-11 6h11M10 6h11M4 10h2M4 6h1v4m1 8H4c0-1 2-2 2-3s-1-1.5-2-1\"/>"
	},
	"list-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 12H3m13-6H3m13 12H3m15-9v6m3-3h-6\"/>"
	},
	"list-restart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 6H3m4 6H3m4 6H3m9 0a5 5 0 0 0 9-3a4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14\"/><path d=\"M11 10v4h4\"/></g>"
	},
	"list-start": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 12H3m13 6H3m7-12H3m18 12V8a2 2 0 0 0-2-2h-5\"/><path d=\"m16 8l-2-2l2-2\"/></g>"
	},
	"list-todo": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"6\" x=\"3\" y=\"5\" rx=\"1\"/><path d=\"m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8\"/></g>"
	},
	"list-tree": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 12h-8m8-6H8m13 12h-8M3 6v4c0 1.1.9 2 2 2h3\"/><path d=\"M3 10v6c0 1.1.9 2 2 2h3\"/></g>"
	},
	"list-video": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 12H3m13-6H3m9 12H3m13-6l5 3l-5 3z\"/>"
	},
	"list-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 12H3m13-6H3m13 12H3m16-8l-4 4m0-4l4 4\"/>"
	},
	loader: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9\"/>"
	},
	"loader-circle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12a9 9 0 1 1-6.219-8.56\"/>"
	},
	"loader-pinwheel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 12a1 1 0 0 1-10 0a1 1 0 0 0-10 0\"/><path d=\"M7 20.7a1 1 0 1 1 5-8.7a1 1 0 1 0 5-8.6\"/><path d=\"M7 3.3a1 1 0 1 1 5 8.6a1 1 0 1 0 5 8.6\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	locate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 12h3m14 0h3M12 2v3m0 14v3\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/></g>"
	},
	"locate-fixed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 12h3m14 0h3M12 2v3m0 14v3\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
	},
	"locate-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 12h3m14 0h3M12 2v3m0 14v3M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7c1.9 0 3.61-.83 4.89-2.11m1.82-2.93c.19-.63.29-1.29.29-1.96c0-3.87-3.13-7-7-7c-.67 0-1.33.1-1.96.29M2 2l20 20\"/>"
	},
	lock: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></g>"
	},
	"lock-keyhole": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"16\" r=\"1\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M7 10V7a5 5 0 0 1 10 0v3\"/></g>"
	},
	"lock-keyhole-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"16\" r=\"1\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M7 10V7a5 5 0 0 1 9.33-2.5\"/></g>"
	},
	"lock-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/></g>"
	},
	"log-in": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4l5-5l-5-5m5 5H3\"/>"
	},
	"log-out": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9\"/>"
	},
	logs: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 12h8m-8 6h8M13 6h8M3 12h1m-1 6h1M3 6h1m4 6h1m-1 6h1M8 6h1\"/>"
	},
	lollipop: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.3-4.3M11 11a2 2 0 0 0 4 0a4 4 0 0 0-8 0a6 6 0 0 0 12 0\"/></g>"
	},
	luggage: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2\"/><path d=\"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-6 2h4\"/><circle cx=\"16\" cy=\"20\" r=\"2\"/><circle cx=\"8\" cy=\"20\" r=\"2\"/></g>"
	},
	magnet: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 15l-4-4l6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4l6.39-6.36a2.14 2.14 0 0 0-3-3zM5 8l4 4m3 3l4 4\"/>"
	},
	mail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/></g>"
	},
	"mail-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12l2 2l4-4\"/></g>"
	},
	"mail-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12h6\"/></g>"
	},
	"mail-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z\"/><path d=\"m22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10\"/></g>"
	},
	"mail-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m17 9v6m-3-3h6\"/></g>"
	},
	"mail-question": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 8.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3c0 1.3-2 2-2 2M20 22v.01\"/></g>"
	},
	"mail-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"m22 22l-1.5-1.5\"/></g>"
	},
	"mail-warning": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m18 7v4m0 4v.01\"/></g>"
	},
	"mail-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9\"/><path d=\"m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m15 10l4 4m0-4l-4 4\"/></g>"
	},
	mailbox: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z\"/><path d=\"M15 9h3v2M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1\"/></g>"
	},
	mails: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"13\" x=\"6\" y=\"4\" rx=\"2\"/><path d=\"m22 7l-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7M2 8v11c0 1.1.9 2 2 2h14\"/></g>"
	},
	map: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15\"/>"
	},
	"map-pin": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></g>"
	},
	"map-pin-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .813-.728\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"m16 18l2 2l4-4\"/></g>"
	},
	"map-pin-check-inside": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><path d=\"m9 10l2 2l4-4\"/></g>"
	},
	"map-pin-house": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1zm3-12a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2M18 22v-3\"/><circle cx=\"10\" cy=\"10\" r=\"3\"/></g>"
	},
	"map-pin-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .824-.738\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M16 18h6\"/></g>"
	},
	"map-pin-minus-inside": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0M9 10h6\"/>"
	},
	"map-pin-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.75 7.09a3 3 0 0 1 2.16 2.16m2.162 7.822c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568M2 2l20 20\"/><path d=\"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533M9.13 9.13a3 3 0 0 0 3.74 3.74\"/></g>"
	},
	"map-pin-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19.914 11.105A7 7 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .824-.738\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M16 18h6m-3-3v6\"/></g>"
	},
	"map-pin-plus-inside": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0m-8-3v6m-3-3h6\"/>"
	},
	"map-pin-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19.752 11.901A7.8 7.8 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0l.09-.077\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"m21.5 15.5l-5 5m5 0l-5-5\"/></g>"
	},
	"map-pin-x-inside": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0m-5.5-2.5l-5 5m0-5l5 5\"/>"
	},
	"map-pinned": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712\"/></g>"
	},
	"map-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15\"/>"
	},
	martini: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 22h8m-4-11v11m7-19l-7 8l-7-8Z\"/>"
	},
	maximize: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3\"/>"
	},
	"maximize-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7\"/>"
	},
	medal: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8\"/><circle cx=\"12\" cy=\"17\" r=\"5\"/><path d=\"M12 18v-2h-.5\"/></g>"
	},
	megaphone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 11l18-5v12L3 14zm8.6 5.8a3 3 0 1 1-5.8-1.6\"/>"
	},
	"megaphone-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.26 9.26L3 11v3l14.14 3.14m3.86-1.8V6l-7.31 2.03M11.6 16.8a3 3 0 1 1-5.8-1.6M2 2l20 20\"/>"
	},
	meh: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 15h8M9 9h.01M15 9h.01\"/></g>"
	},
	"memory-stick": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 19v-3m4 3v-3m4 3v-3m4 3v-3M8 11V9m8 2V9m-4 2V9M2 15h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z\"/>"
	},
	menu: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12h16M4 6h16M4 18h16\"/>"
	},
	merge: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8 6l4-4l4 4\"/><path d=\"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0l-5-5\"/></g>"
	},
	"message-circle": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>"
	},
	"message-circle-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 9.5L8 12l2 2.5m4-5l2 2.5l-2 2.5\"/><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22z\"/></g>"
	},
	"message-circle-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1m8.8 3.7a10.5 10.5 0 0 0-2.1-2.1m3.7 8.8c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5m-3.7 8.8a10.5 10.5 0 0 0 2.1-2.1m-8.8 3.7c.5.1 1 .1 1.5.1s1-.1 1.5-.1m-10-3.4L2 22l4.5-1.5m-3.4-10c0 .5-.1 1-.1 1.5s.1 1 .1 1.5m3.7-8.8a10.5 10.5 0 0 0-2.1 2.1\"/>"
	},
	"message-circle-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/><path d=\"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4l-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5l3.6-3.5c1.2-1.2 1.1-2.7.2-3.7\"/></g>"
	},
	"message-circle-more": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Zm.1-8h.01M12 12h.01M16 12h.01\"/>"
	},
	"message-circle-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20.5 14.9A9 9 0 0 0 9.1 3.5M2 2l20 20M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6l6-2c3.4 1.8 7.6 1.1 10.3-1.7\"/>"
	},
	"message-circle-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Zm.1-8h8m-4-4v8\"/>"
	},
	"message-circle-question": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\"/></g>"
	},
	"message-circle-reply": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/><path d=\"m10 15l-3-3l3-3\"/><path d=\"M7 12h7a2 2 0 0 1 2 2v1\"/></g>"
	},
	"message-circle-warning": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22ZM12 8v4m0 4h.01\"/>"
	},
	"message-circle-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22ZM15 9l-6 6m0-6l6 6\"/>"
	},
	"message-square": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>"
	},
	"message-square-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 7.5L8 10l2 2.5m4-5l2 2.5l-2 2.5\"/><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></g>"
	},
	"message-square-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 17H7l-4 4v-7m11 3h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1a2 2 0 0 1-2 2m2-8v1M3 9v1m2-7a2 2 0 0 0-2 2m6-2h1\"/>"
	},
	"message-square-diff": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5 19l-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M9 10h6m-3-3v6m-3 4h6\"/>"
	},
	"message-square-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/></g>"
	},
	"message-square-heart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><path d=\"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3l-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8\"/></g>"
	},
	"message-square-lock": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 15v-2a2 2 0 1 0-4 0v2\"/><path d=\"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5\"/><rect width=\"8\" height=\"5\" x=\"13\" y=\"15\" rx=\"1\"/></g>"
	},
	"message-square-more": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 10h.01M12 10h.01M16 10h.01\"/>"
	},
	"message-square-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15V5a2 2 0 0 0-2-2H9M2 2l20 20M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10\"/>"
	},
	"message-square-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-9-8v6m-3-3h6\"/>"
	},
	"message-square-quote": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><path d=\"M8 12a2 2 0 0 0 2-2V8H8m6 4a2 2 0 0 0 2-2V8h-2\"/></g>"
	},
	"message-square-reply": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><path d=\"m10 7l-3 3l3 3\"/><path d=\"M17 13v-1a2 2 0 0 0-2-2H7\"/></g>"
	},
	"message-square-share": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7m4 0h5v5m-5 0l5-5\"/>"
	},
	"message-square-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7\"/>"
	},
	"message-square-warning": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-9-8v2m0 4h.01\"/>"
	},
	"message-square-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-6.5-7.5l-5 5m0-5l5 5\"/>"
	},
	"messages-square": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1\"/>"
	},
	mic: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2m7 9v3\"/></g>"
	},
	"mic-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 2l20 20m-3.11-8.77A7 7 0 0 0 19 12v-2M5 10v2a7 7 0 0 0 12 5m-2-7.66V5a3 3 0 0 0-5.68-1.33\"/><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M12 19v3\"/></g>"
	},
	"mic-vocal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m11 7.601l-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12\"/><path d=\"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5\"/><circle cx=\"16\" cy=\"7\" r=\"5\"/></g>"
	},
	microchip: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 12h2m-2 4h2m-2 4h2M18 4h2m-2 4h2M4 12h2m-2 4h2m-2 4h2M4 4h2M4 8h2m2-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z\"/>"
	},
	microscope: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"/>"
	},
	microwave: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"15\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"8\" height=\"7\" x=\"6\" y=\"8\" rx=\"1\"/><path d=\"M18 8v7M6 19v2m12-2v2\"/></g>"
	},
	milestone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z\"/>"
	},
	milk: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0\"/></g>"
	},
	"milk-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2h8M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 3.435.435M2 2l20 20\"/></g>"
	},
	minimize: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m8 0v-3a2 2 0 0 1 2-2h3\"/>"
	},
	"minimize-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14h6v6m10-10h-6V4m0 6l7-7M3 21l7-7\"/>"
	},
	minus: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 12h14\"/>"
	},
	monitor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M8 21h8m-4-4v4\"/></g>"
	},
	"monitor-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 10l2 2l4-4\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4m-4 0h8\"/></g>"
	},
	"monitor-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 17v4m3.2-16.1l-.9-.4m.9 2.6l-.9.4m2.6-4.3l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9m2.6-4.3l-.9.4m.9 2.6l-.9-.4M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/></g>"
	},
	"monitor-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"19\" cy=\"6\" r=\"3\"/><path d=\"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9m-1 14v4m-4 0h8\"/></g>"
	},
	"monitor-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 13V7m3 3l-3 3l-3-3\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4m-4 0h8\"/></g>"
	},
	"monitor-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2m19 12V5a2 2 0 0 0-2-2H9M8 21h8m-4-4v4M2 2l20 20\"/>"
	},
	"monitor-pause": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 13V7m4 6V7\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4m-4 0h8\"/></g>"
	},
	"monitor-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64zM12 17v4m-4 0h8\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/></g>"
	},
	"monitor-smartphone": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"12\" rx=\"2\"/></g>"
	},
	"monitor-speaker": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5.5 20H8m9-11h.01\"/><rect width=\"10\" height=\"16\" x=\"12\" y=\"4\" rx=\"2\"/><path d=\"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/></g>"
	},
	"monitor-stop": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 17v4m-4 0h8\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"7\" rx=\"1\"/></g>"
	},
	"monitor-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 10l3-3l3 3m-3 3V7\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4m-4 0h8\"/></g>"
	},
	"monitor-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m14.5 12.5l-5-5m0 5l5-5\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4m-4 0h8\"/></g>"
	},
	moon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9\"/>"
	},
	"moon-star": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9m8 0v4m2-2h-4\"/>"
	},
	mountain: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 3l4 8l5-5l5 15H2z\"/>"
	},
	"mountain-snow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8 3l4 8l5-5l5 15H2z\"/><path d=\"M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19\"/></g>"
	},
	mouse: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"7\"/><path d=\"M12 6v4\"/></g>"
	},
	"mouse-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v.343m6.218 11.875A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218M19 13.343V9A7 7 0 0 0 8.56 2.902M22 22L2 2\"/>"
	},
	"mouse-pointer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z\"/>"
	},
	"mouse-pointer-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z\"/>"
	},
	"mouse-pointer-ban": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><path d=\"m11.8 11.8l8.4 8.4\"/></g>"
	},
	"mouse-pointer-click": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z\"/>"
	},
	move: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v20m3-3l-3 3l-3-3M19 9l3 3l-3 3M2 12h20M5 9l-3 3l3 3M9 5l3-3l3 3\"/>"
	},
	"move-3d": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 3v16h16M5 19l6-6\"/><path d=\"m2 6l3-3l3 3m10 10l3 3l-3 3\"/></g>"
	},
	"move-diagonal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19H5v-6m8-8h6v6m0-6L5 19\"/>"
	},
	"move-diagonal-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 13v6h-6m-8-8V5h6M5 5l14 14\"/>"
	},
	"move-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 18l4 4l4-4M12 2v20\"/>"
	},
	"move-down-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19H5v-6m14-8L5 19\"/>"
	},
	"move-down-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 13v6h-6M5 5l14 14\"/>"
	},
	"move-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 8l4 4l-4 4M2 12h20M6 8l-4 4l4 4\"/>"
	},
	"move-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 8l-4 4l4 4m-4-4h20\"/>"
	},
	"move-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 8l4 4l-4 4M2 12h20\"/>"
	},
	"move-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 6l4-4l4 4m-4-4v20\"/>"
	},
	"move-up-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 11V5h6M5 5l14 14\"/>"
	},
	"move-up-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5h6v6m0-6L5 19\"/>"
	},
	"move-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v20m-4-4l4 4l4-4M8 6l4-4l4 4\"/>"
	},
	music: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></g>"
	},
	"music-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"8\" cy=\"18\" r=\"4\"/><path d=\"M12 18V2l7 4\"/></g>"
	},
	"music-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"18\" r=\"4\"/><path d=\"M16 18V2\"/></g>"
	},
	"music-4": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 18V5l12-2v13M9 9l12-2\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></g>"
	},
	navigation: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 11l19-9l-9 19l-2-8z\"/>"
	},
	"navigation-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 2l7 19l-7-4l-7 4z\"/>"
	},
	"navigation-2-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.31 9.31L5 21l7-4l7 4l-1.17-3.17m-3.3-8.95L12 2l-1.17 3.17M2 2l20 20\"/>"
	},
	"navigation-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.43 8.43L3 11l8 2l2 8l2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20\"/>"
	},
	network: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"6\" x=\"16\" y=\"16\" rx=\"1\"/><rect width=\"6\" height=\"6\" x=\"2\" y=\"16\" rx=\"1\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"2\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8\"/></g>"
	},
	newspaper: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2m12 5h-8m5 4h-5\"/><path d=\"M10 6h8v4h-8z\"/></g>"
	},
	nfc: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 .01 15.8M16.37 2a20.16 20.16 0 0 1 0 20\"/>"
	},
	notebook: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 6h4m-4 4h4m-4 4h4m-4 4h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M16 2v20\"/></g>"
	},
	"notebook-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4\"/><path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/></g>"
	},
	"notebook-tabs": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 6h4m-4 4h4m-4 4h4m-4 4h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M15 2v20m0-15h5m-5 5h5m-5 5h5\"/></g>"
	},
	"notebook-text": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 6h4m-4 4h4m-4 4h4m-4 4h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M9.5 8h5m-5 4H16m-6.5 4H14\"/></g>"
	},
	"notepad-text": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m4-4v4m4-4v4\"/><rect width=\"16\" height=\"18\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M8 10h6m-6 4h8m-8 4h5\"/></g>"
	},
	"notepad-text-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 2v4m4-4v4m4-4v4m0-2h2a2 2 0 0 1 2 2v2m0 4v2m0 4v2a2 2 0 0 1-2 2h-1m-4 0h-2m-4 0H6a2 2 0 0 1-2-2v-2m0-4v-2m0-4V6a2 2 0 0 1 2-2h2m0 6h6m-6 4h8m-8 4h5\"/>"
	},
	nut: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 4V2m-7 8v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7 7 0 0 0 19 14v-4\"/><path d=\"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3c1.31-.082 1.972-.29 3-1c.54.92.982 1.356 2 2c1.452-.647 1.954-1.098 2.5-2c.595.995 1.151 1.427 2.5 2c1.31-.621 1.862-1.058 2.5-2c.629.977 1.162 1.423 2.5 2c1.209-.548 1.68-.967 2-2c1.032.916 1.683 1.157 3 1c-1.297-1.036-1.758-2.03-2-3c-.5-2-4-4-8-4\"/></g>"
	},
	"nut-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 4V2m-7 8v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7 7 0 0 0 4.125-2.939M19 10v3.343\"/><path d=\"M12 12c-1.349-.573-1.905-1.005-2.5-2c-.546.902-1.048 1.353-2.5 2c-1.018-.644-1.46-1.08-2-2c-1.028.71-1.69.918-3 1c1.081-1.048 1.757-2.03 2-3c.194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787c1.032.916 1.683 1.157 3 1c-1.297-1.036-1.758-2.03-2-3c-.5-2-4-4-8-4c-.74 0-1.461.068-2.15.192M2 2l20 20\"/></g>"
	},
	octagon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/>"
	},
	"octagon-alert": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 16h.01M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z\"/>"
	},
	"octagon-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586zM8 12h8\"/>"
	},
	"octagon-pause": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 15V9m4 6V9M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/>"
	},
	"octagon-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 9l-6 6m-6.414 1.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586zM9 9l6 6\"/>"
	},
	omega: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437a8 8 0 1 1 8.494-.001a.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21\"/>"
	},
	option: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3h6l6 18h6M14 3h7\"/>"
	},
	orbit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><path d=\"M10.4 21.9a10 10 0 0 0 9.941-15.416M13.5 2.1a10 10 0 0 0-9.841 15.416\"/></g>"
	},
	origami: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009\"/><path d=\"m12.214 3.381l8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027\"/></g>"
	},
	"package": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12\"/><path d=\"M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15\"/></g>"
	},
	"package-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0l2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9m-9-6v6\"/>"
	},
	"package-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m16 16l2 2l4-4\"/><path d=\"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15\"/><path d=\"M3.29 7L12 12l8.71-5M12 22V12\"/></g>"
	},
	"package-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 16h6m-1-6V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15\"/><path d=\"M3.29 7L12 12l8.71-5M12 22V12\"/></g>"
	},
	"package-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z\"/><path d=\"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13\"/><path d=\"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z\"/></g>"
	},
	"package-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 16h6m-3-3v6m2-9V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15\"/><path d=\"M3.29 7L12 12l8.71-5M12 22V12\"/></g>"
	},
	"package-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15\"/><path d=\"M3.29 7L12 12l8.71-5M12 22V12\"/><circle cx=\"18.5\" cy=\"15.5\" r=\"2.5\"/><path d=\"M20.27 17.27L22 19\"/></g>"
	},
	"package-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15\"/><path d=\"M3.29 7L12 12l8.71-5M12 22V12m5 1l5 5m-5 0l5-5\"/></g>"
	},
	"paint-bucket": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 11l-8-8l-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0zM5 2l5 5m-8 6h15m5 7a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4c.3 1.6 2 2.4 2 4\"/>"
	},
	"paint-roller": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"6\" x=\"2\" y=\"2\" rx=\"2\"/><path d=\"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"/><rect width=\"4\" height=\"6\" x=\"8\" y=\"16\" rx=\"1\"/></g>"
	},
	paintbrush: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15\"/>"
	},
	"paintbrush-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2v2m4-2v4m3-4a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1zM6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1\"/>"
	},
	palette: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688c0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2\"/></g>"
	},
	"panel-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18\"/></g>"
	},
	"panel-bottom-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18m-6-7l-3 3l-3-3\"/></g>"
	},
	"panel-bottom-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M14 15h1m4 0h2M3 15h2m4 0h1\"/></g>"
	},
	"panel-bottom-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18M9 10l3-3l3 3\"/></g>"
	},
	"panel-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/></g>"
	},
	"panel-left-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18m7-6l-3-3l3-3\"/></g>"
	},
	"panel-left-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 14v1m0 4v2M9 3v2m0 4v1\"/></g>"
	},
	"panel-left-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18m5-12l3 3l-3 3\"/></g>"
	},
	"panel-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18\"/></g>"
	},
	"panel-right-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18M8 9l3 3l-3 3\"/></g>"
	},
	"panel-right-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 14v1m0 4v2m0-18v2m0 4v1\"/></g>"
	},
	"panel-right-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18m-5-6l-3-3l3-3\"/></g>"
	},
	"panel-top": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/></g>"
	},
	"panel-top-close": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18M9 16l3-3l3 3\"/></g>"
	},
	"panel-top-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M14 9h1m4 0h2M3 9h2m4 0h1\"/></g>"
	},
	"panel-top-open": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18m-6 5l-3 3l-3-3\"/></g>"
	},
	"panels-left-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18m0-6h12\"/></g>"
	},
	"panels-right-bottom": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h12m0-12v18\"/></g>"
	},
	"panels-top-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18M9 21V9\"/></g>"
	},
	paperclip: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.234 20.252L21 12.3M16 6l-8.414 8.586a2 2 0 0 0 0 2.828a2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656a4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486\"/>"
	},
	parentheses: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9\"/>"
	},
	"parking-meter": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 15h2m-1-3v3m0 4v3m3.282-3a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z\"/><path d=\"M9 9a3 3 0 1 1 6 0\"/></g>"
	},
	"party-popper": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7\"/><path d=\"M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2\"/></g>"
	},
	pause: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"4\" height=\"16\" x=\"14\" y=\"4\" rx=\"1\"/><rect width=\"4\" height=\"16\" x=\"6\" y=\"4\" rx=\"1\"/></g>"
	},
	"paw-print": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"4\" r=\"2\"/><circle cx=\"18\" cy=\"8\" r=\"2\"/><circle cx=\"20\" cy=\"16\" r=\"2\"/><path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z\"/></g>"
	},
	"pc-case": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"/><path d=\"M15 14h.01M9 6h6m-6 4h6\"/></g>"
	},
	pen: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/>"
	},
	"pen-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z\"/>"
	},
	"pen-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m10 10l-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81l4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M2 2l20 20\"/>"
	},
	"pen-tool": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z\"/><path d=\"m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286\"/><circle cx=\"11\" cy=\"11\" r=\"2\"/></g>"
	},
	pencil: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4\"/>"
	},
	"pencil-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854zM15 5l3 3\"/>"
	},
	"pencil-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m10 10l-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81l4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M15 5l4 4M2 2l20 20\"/>"
	},
	"pencil-ruler": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4\"/>"
	},
	pentagon: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z\"/>"
	},
	percent: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 5L5 19\"/><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"/></g>"
	},
	"person-standing": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"5\" r=\"1\"/><path d=\"m9 20l3-6l3 6M6 8l6 2l6-2m-6 2v4\"/></g>"
	},
	"philippine-peso": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 11H4m16-4H4m3 14V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7\"/>"
	},
	phone: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92\"/>"
	},
	"phone-call": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92M14.05 2a9 9 0 0 1 8 7.94m-8-3.94A5 5 0 0 1 18 10\"/>"
	},
	"phone-forwarded": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 2l4 4l-4 4m-4-4h8m0 10.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92\"/>"
	},
	"phone-incoming": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 2v6h6m0-6l-6 6m6 8.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92\"/>"
	},
	"phone-missed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m22 2l-6 6m0-6l6 6m0 8.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92\"/>"
	},
	"phone-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7a2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.4 19.4 0 0 1-3.33-2.67m-2.67-3.34a19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91M22 2L2 22\"/>"
	},
	"phone-outgoing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 8V2h-6m0 6l6-6m0 14.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92\"/>"
	},
	pi: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 4v16M4 7c0-1.7 1.3-3 3-3h13\"/><path d=\"M18 20c-1.7 0-3-1.3-3-3V4\"/></g>"
	},
	piano: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8M2 14h20M6 14v4m4-4v4m4-4v4m4-4v4\"/>"
	},
	pickaxe: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14.531 12.469L6.619 20.38a1 1 0 1 1-3-3l7.912-7.912m4.155-5.154A12.5 12.5 0 0 0 5.461 2.958A1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393\"/><path d=\"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z\"/><path d=\"M19.686 8.314a12.5 12.5 0 0 1 1.356 10.225a1 1 0 0 1-1.751-.119a22 22 0 0 0-3.393-6.319\"/></g>"
	},
	"picture-in-picture": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 10h6V4M2 4l6 6m13 0V7a2 2 0 0 0-2-2h-7m-9 9v2a2 2 0 0 0 2 2h3\"/><rect width=\"10\" height=\"7\" x=\"12\" y=\"14\" rx=\"1\"/></g>"
	},
	"picture-in-picture-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4\"/><rect width=\"10\" height=\"7\" x=\"12\" y=\"13\" rx=\"2\"/></g>"
	},
	"pie-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/></g>",
		hidden: true
	},
	"piggy-bank": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 5c-1.5 0-2.8 1.4-3 2c-3.5-1.5-11-.3-11 5c0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2zM2 9v1c0 1.1.9 2 2 2h1m11-1h.01\"/>"
	},
	pilcrow: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13\"/>"
	},
	"pilcrow-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2l4-4m0 8l-4-4\"/>"
	},
	"pilcrow-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 3v11m0-5H7a1 1 0 0 1 0-6h8m-1 0v11m4 0l4 4H2m20 0l-4 4\"/>"
	},
	pill: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7\"/>"
	},
	"pill-bottle": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4\"/><path d=\"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7\"/><rect width=\"16\" height=\"5\" x=\"4\" y=\"2\" rx=\"1\"/></g>"
	},
	pin: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z\"/>"
	},
	"pin-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 17v5m3-12.66V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H7.89M2 2l20 20M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11\"/>"
	},
	pipette: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 22l1-1h3l9-9M3 21v-3l9-9\"/><path d=\"m15 6l3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3z\"/></g>"
	},
	pizza: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7\"/><path d=\"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z\"/></g>"
	},
	plane: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2\"/>"
	},
	"plane-landing": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 22h20M3.77 10.77L2 9l2-4.5l1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6l1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38\"/>"
	},
	"plane-takeoff": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 22h20M6.36 17.4L4 17l-2-4l1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12L5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z\"/>"
	},
	play: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 3l14 9l-14 9z\"/>"
	},
	plug: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z\"/>"
	},
	"plug-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 2v6m6-6v6m-3 9v5M5 8h14M6 11V8h12v3a6 6 0 1 1-12 0\"/>"
	},
	"plug-zap": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m5-11l-4 4h6l-4 4\"/>"
	},
	plus: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 12h14m-7-7v14\"/>"
	},
	pocket: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2\"/><path d=\"m8 10l4 4l4-4\"/></g>"
	},
	"pocket-knife": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z\"/><path d=\"M18 11.66V22a4 4 0 0 0 4-4V6\"/></g>"
	},
	podcast: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16.85 18.58a9 9 0 1 0-9.7 0\"/><path d=\"M8 14a5 5 0 1 1 8 0\"/><circle cx=\"12\" cy=\"11\" r=\"1\"/><path d=\"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z\"/></g>"
	},
	pointer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 14a8 8 0 0 1-8 8m4-11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 0V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1m0-.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10\"/><path d=\"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/></g>"
	},
	"pointer-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 4.5V4a2 2 0 0 0-2.41-1.957M13.9 8.4a2 2 0 0 0-1.26-1.295M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158M7 15l-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343M6 6v8M2 2l20 20\"/>"
	},
	popcorn: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 8a2 2 0 0 0 0-4a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0 0 4m4 14L9 8m5 14l1-14\"/><path d=\"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z\"/></g>"
	},
	popsicle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1ZM22 22l-5.5-5.5\"/>"
	},
	"pound-sterling": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 7c0-5.333-8-5.333-8 0m0 0v14m-4 0h12M6 13h10\"/>"
	},
	power: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04\"/>"
	},
	"power-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.36 6.64A9 9 0 0 1 20.77 15M6.16 6.16a9 9 0 1 0 12.68 12.68M12 2v4M2 2l20 20\"/>"
	},
	presentation: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18l5-5l5 5\"/>"
	},
	printer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/><rect width=\"12\" height=\"8\" x=\"6\" y=\"14\" rx=\"1\"/></g>"
	},
	"printer-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5M16 19l2 2l4-4\"/><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/></g>"
	},
	projector: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 7L3 5m6 1V3m4 4l2-2\"/><circle cx=\"9\" cy=\"13\" r=\"3\"/><path d=\"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17M16 16h2\"/></g>"
	},
	proportions: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M12 9v11M2 9h13a2 2 0 0 1 2 2v9\"/></g>"
	},
	puzzle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z\"/>"
	},
	pyramid: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0ZM12 2v20\"/>"
	},
	"qr-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/><path d=\"M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1\"/></g>"
	},
	quote: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/>"
	},
	rabbit: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 16a3 3 0 0 1 2.24 5M18 12h.01\"/><path d=\"M18 21h-8a4 4 0 0 1-4-4a7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3\"/><path d=\"M20 8.54V4a2 2 0 1 0-4 0v3m-8.388 5.524a3 3 0 1 0-1.6 4.3\"/></g>"
	},
	radar: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27\"/><path d=\"M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59l5.66-5.66\"/></g>"
	},
	radiation: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 12h.01M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4c-1.1-1.9-2-3.5-2.5-4.4M21 12c.6 0 1-.4 1-1c-.3-2.9-1.8-5.5-4.1-7.1c-.4-.3-1.1-.2-1.3.3c-.6.9-1.5 2.5-2.6 4.3c1.2.7 2 2 2 3.5zM7.5 19.8c-.3.5-.1 1.1.4 1.3c2.6 1.2 5.6 1.2 8.2 0c.5-.2.7-.8.4-1.3c-.5-.9-1.4-2.5-2.5-4.3c-1.2.7-2.8.7-4 0c-1.1 1.8-2 3.4-2.5 4.3\"/>"
	},
	radical: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21\"/>"
	},
	radio: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4.9 19.1C1 15.2 1 8.8 4.9 4.9m2.9 11.3c-2.3-2.3-2.3-6.1 0-8.5\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5m2.9-11.4C23 8.8 23 15.1 19.1 19\"/></g>"
	},
	"radio-receiver": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 16v2m14-2v2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"8\" rx=\"2\"/><path d=\"M18 12h.01\"/></g>"
	},
	"radio-tower": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4.9 16.1C1 12.2 1 5.8 4.9 1.9m2.9 2.8a6.14 6.14 0 0 0-.8 7.5\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/><path d=\"M16.2 4.8c2 2 2.26 5.11.8 7.47M19.1 1.9a9.96 9.96 0 0 1 0 14.1m-9.6 2h5M8 22l4-11l4 11\"/></g>"
	},
	radius: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20.34 17.52a10 10 0 1 0-2.82 2.82\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/><path d=\"m13.41 13.41l4.18 4.18\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></g>"
	},
	"rail-symbol": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 15h14M5 9h14m-5 11l-5-5l6-6l-5-5\"/>"
	},
	rainbow: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 17a10 10 0 0 0-20 0\"/><path d=\"M6 17a6 6 0 0 1 12 0\"/><path d=\"M10 17a2 2 0 0 1 4 0\"/></g>"
	},
	rat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 22H4a2 2 0 0 1 0-4h12m-2.764 0a3 3 0 0 0-2.2-5M16 9h.01\"/><path d=\"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3\"/><path d=\"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015A4 4 0 0 0 8 18\"/></g>"
	},
	ratio: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"2\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	receipt: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11\"/></g>"
	},
	"receipt-cent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm8 4.5v11\"/><path d=\"M15 9.4a4 4 0 1 0 0 5.2\"/></g>"
	},
	"receipt-euro": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 10h5\"/><path d=\"M16 9.5a4 4 0 1 0 0 5.2\"/></g>"
	},
	"receipt-indian-rupee": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 5h8\"/><path d=\"M12 17.5L8 15h1a4 4 0 0 0 0-8m-1 4h8\"/></g>"
	},
	"receipt-japanese-yen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm8 8l3-3\"/><path d=\"m9 7l3 3v7.5M9 11h6m-6 4h6\"/></g>"
	},
	"receipt-pound-sterling": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 11h5\"/><path d=\"M10 17V9.5a2.5 2.5 0 0 1 5 0M8 17h7\"/></g>"
	},
	"receipt-russian-ruble": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 13h5\"/><path d=\"M8 11h5a2 2 0 1 0 0-4h-3v10\"/></g>"
	},
	"receipt-swiss-franc": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z\"/><path d=\"M10 17V7h5m-5 4h4m-6 4h5\"/></g>"
	},
	"receipt-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm10 6H8m8 4H8m5 4H8\"/>"
	},
	"rectangle-ellipsis": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><path d=\"M12 12h.01M17 12h.01M7 12h.01\"/></g>"
	},
	"rectangle-horizontal": {
		body: "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" rx=\"2\"/>"
	},
	"rectangle-vertical": {
		body: "<rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" rx=\"2\"/>"
	},
	recycle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12\"/><path d=\"m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843\"/><path d=\"m13.378 9.633l4.096 1.098l1.097-4.096\"/></g>"
	},
	redo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 7v6h-6\"/><path d=\"M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7\"/></g>"
	},
	"redo-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 14l5-5l-5-5\"/><path d=\"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13\"/></g>"
	},
	"redo-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"17\" r=\"1\"/><path d=\"M21 7v6h-6\"/><path d=\"M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7\"/></g>"
	},
	"refresh-ccw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16\"/><path d=\"M16 16h5v5\"/></g>"
	},
	"refresh-ccw-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 2v6h6\"/><path d=\"M21 12A9 9 0 0 0 6 5.3L3 8m18 14v-6h-6\"/><path d=\"M3 12a9 9 0 0 0 15 6.7l3-2.7\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></g>"
	},
	"refresh-cw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/></g>"
	},
	"refresh-cw-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m21 8l-2.26-2.26A9.75 9.75 0 0 0 12 3c-1 0-1.97.16-2.87.47M8 16H3v5m0-9c0-2.49 1-4.74 2.64-6.36\"/><path d=\"m3 16l2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64M21 12c0 1-.16 1.97-.47 2.87M21 3v5h-5m6 14L2 2\"/></g>"
	},
	refrigerator: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0 4h14m-4-3v6\"/>"
	},
	regex: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 3v10m-4.33-7.5l8.66 5m-8.66 0l8.66-5M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z\"/>"
	},
	"remove-formatting": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5\"/>"
	},
	repeat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m17 2l4 4l-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/></g>"
	},
	"repeat-1": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m17 2l4 4l-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3m8-8h1v4\"/></g>"
	},
	"repeat-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 9l3-3l3 3\"/><path d=\"M13 18H7a2 2 0 0 1-2-2V6m17 9l-3 3l-3-3\"/><path d=\"M11 6h6a2 2 0 0 1 2 2v10\"/></g>"
	},
	replace: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 4a2 2 0 0 1 2-2m0 8a2 2 0 0 1-2-2m6-6a2 2 0 0 1 2 2m0 4a2 2 0 0 1-2 2M3 7l3 3l3-3\"/><path d=\"M6 10V5a3 3 0 0 1 3-3h1\"/><rect width=\"8\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/></g>"
	},
	"replace-all": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-18a2 2 0 0 1 2-2m0 8a2 2 0 0 1-2-2m6 6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-20a2 2 0 0 1 2 2m0 4a2 2 0 0 1-2 2M3 7l3 3l3-3\"/><path d=\"M6 10V5a3 3 0 0 1 3-3h1\"/><rect width=\"8\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/></g>"
	},
	reply: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 17l-5-5l5-5\"/><path d=\"M20 18v-2a4 4 0 0 0-4-4H4\"/></g>"
	},
	"reply-all": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m7 17l-5-5l5-5m5 10l-5-5l5-5\"/><path d=\"M22 18v-2a4 4 0 0 0-4-4H7\"/></g>"
	},
	rewind: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m11 19l-9-7l9-7zm11 0l-9-7l9-7z\"/>"
	},
	ribbon: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22M12 18l2.57-3.5\"/><path d=\"M6.243 9.016a7 7 0 0 1 11.507-.009m-8.4 5.523L12 11.22\"/><path d=\"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z\"/></g>"
	},
	rocket: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/></g>"
	},
	"rocking-chair": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3.5 2l3 10.5H18m-8.5 0l-4 7.5m9.5-7.5l3.5 7.5M2.75 18a13 13 0 0 0 18.5 0\"/>"
	},
	"roller-coaster": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 19V5m4 14V6.8M14 19v-7.8M18 5v4m0 10v-6m4 6V9M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65\"/>"
	},
	"rotate-3d": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12s2.239 10 5 10q.514-.002 1-.2m2.194-8.093l3.814 1.86l-1.86 3.814\"/><path d=\"M19 15.57c-1.804.885-4.274 1.43-7 1.43c-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4\"/></g>"
	},
	"rotate-ccw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/></g>"
	},
	"rotate-ccw-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 9V7a2 2 0 0 0-2-2h-6\"/><path d=\"m15 2l-3 3l3 3m5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2\"/></g>"
	},
	"rotate-cw": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/></g>"
	},
	"rotate-cw-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 5H6a2 2 0 0 0-2 2v3\"/><path d=\"m9 8l3-3l-3-3M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"/></g>"
	},
	route: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/></g>"
	},
	"route-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/></g>"
	},
	router: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6.01 18H6m4.01 0H10m5-8v4m2.84-6.83a4 4 0 0 0-5.66 0m8.48-2.83a8 8 0 0 0-11.31 0\"/></g>"
	},
	"rows-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 12h18\"/></g>"
	},
	"rows-3": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 9H3m18 6H3\"/></g>"
	},
	"rows-4": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 7.5H3M21 12H3m18 4.5H3\"/></g>"
	},
	rss: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/></g>"
	},
	ruler: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2\"/>"
	},
	"russian-ruble": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 11h8a4 4 0 0 0 0-8H9v18m-3-6h8\"/>"
	},
	sailboat: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4m-1-4L10 2L3 14zM10 2v16\"/>"
	},
	salad: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 21h10m-5 0a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9\"/><path d=\"M11.38 12a2.4 2.4 0 0 1-.4-4.77a2.4 2.4 0 0 1 3.2-2.77a2.4 2.4 0 0 1 3.47-.63a2.4 2.4 0 0 1 3.37 3.37a2.4 2.4 0 0 1-1.1 3.7a2.5 2.5 0 0 1 .03 1.1M13 12l4-4\"/><path d=\"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2\"/></g>"
	},
	sandwich: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2.37 11.223l8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9\"/><path d=\"m6.67 15l6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2\"/><rect width=\"20\" height=\"4\" x=\"2\" y=\"11\" rx=\"1\"/></g>"
	},
	satellite: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 7L9 3L5 7l4 4m8 0l4 4l-4 4l-4-4\"/><path d=\"m8 12l4 4l6-6l-4-4Zm8-4l3-3M9 21a6 6 0 0 0-6-6\"/></g>"
	},
	"satellite-dish": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3\"/>"
	},
	save: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"/><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7\"/></g>"
	},
	"save-all": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2v3a1 1 0 0 0 1 1h5m2 12v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6\"/><path d=\"M18 22H4a2 2 0 0 1-2-2V6\"/><path d=\"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z\"/></g>"
	},
	"save-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 13H8a1 1 0 0 0-1 1v7m7-13h1m2 13v-4M2 2l20 20\"/><path d=\"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15\"/></g>"
	},
	scale: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2\"/>"
	},
	"scale-3d": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 7v11a1 1 0 0 0 1 1h11m-11.707-.293L11 13\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"5\" r=\"2\"/></g>"
	},
	scaling: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M14 15H9v-5m7-7h5v5m0-5L9 15\"/></g>"
	},
	scan: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/>"
	},
	"scan-barcode": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 7v10m4-10v10m5-10v10\"/>"
	},
	"scan-eye": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0\"/></g>"
	},
	"scan-face": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01\"/>"
	},
	"scan-heart": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388zM17 3h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 18H5a2 2 0 0 1-2-2v-2\"/>"
	},
	"scan-line": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10\"/>"
	},
	"scan-qr-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17 12v4a1 1 0 0 1-1 1h-4m5-14h2a2 2 0 0 1 2 2v2m-4 1V7m4 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 14h.01M7 21H5a2 2 0 0 1-2-2v-2\"/><rect width=\"5\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\"/></g>"
	},
	"scan-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m16 16l-1.9-1.9\"/></g>"
	},
	"scan-text": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-9h8m-8 4h10M7 16h6\"/>"
	},
	"scatter-chart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M3 3v18h18\"/></g>",
		hidden: true
	},
	school: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 22v-4a2 2 0 1 0-4 0v4\"/><path d=\"m18 10l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10m12-5v17M4 6l7.106-3.553a2 2 0 0 1 1.788 0L20 6M6 5v17\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/></g>"
	},
	scissors: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M8.12 8.12L12 12m8-8L8.12 15.88\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M14.8 14.8L20 20\"/></g>"
	},
	"scissors-line-dashed": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5.42 9.42L8 12\"/><circle cx=\"4\" cy=\"8\" r=\"2\"/><path d=\"m14 6l-8.58 8.58\"/><circle cx=\"4\" cy=\"16\" r=\"2\"/><path d=\"M10.8 14.8L14 18m2-6h-2m8 0h-2\"/></g>"
	},
	"screen-share": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3M8 21h8m-4-4v4m5-13l5-5m-5 0h5v5\"/>"
	},
	"screen-share-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3M8 21h8m-4-4v4M22 3l-5 5m0-5l5 5\"/>"
	},
	scroll: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 17V5a2 2 0 0 0-2-2H4\"/><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"/></g>"
	},
	"scroll-text": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4\"/><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"/></g>"
	},
	search: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.3-4.3\"/></g>"
	},
	"search-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8 11l2 2l4-4\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.3-4.3\"/></g>"
	},
	"search-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></g>"
	},
	"search-large": {
		body: "<g fill=\"none\"><path clip-rule=\"evenodd\" d=\"M18.874 19.581a6 6 0 1 1 .707-.707l4.273 4.272l-.708.708zM20 15a5 5 0 1 1-10 0a5 5 0 0 1 10 0z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></g>",
		width: 32,
		height: 32,
		hidden: true
	},
	"search-slash": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m13.5 8.5l-5 5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.3-4.3\"/></g>"
	},
	"search-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m13.5 8.5l-5 5m0-5l5 5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.3-4.3\"/></g>"
	},
	section: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0\"/><path d=\"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0\"/></g>"
	},
	send: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939\"/>"
	},
	"send-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904zM6 12h16\"/>"
	},
	"send-to-back": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\"/><path d=\"M7 14v1a2 2 0 0 0 2 2h1m4-10h1a2 2 0 0 1 2 2v1\"/></g>"
	},
	"separator-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12h18M8 8l4-4l4 4m0 8l-4 4l-4-4\"/>"
	},
	"separator-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3v18M8 8l-4 4l4 4m8 0l4-4l-4-4\"/>"
	},
	server: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M6 6h.01M6 18h.01\"/></g>"
	},
	"server-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5m-15 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 6h.01M6 18h.01m9.69-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.7.9l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4m-2.3-2.1l-.3.9\"/></g>"
	},
	"server-crash": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2M6 6h.01M6 18h.01\"/><path d=\"m13 6l-4 6h6l-4 6\"/></g>"
	},
	"server-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5m-5 0L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2zm12 7v-1a2 2 0 0 0-2-2h-1M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5l.5.5l-8-8zm2 4h.01M2 2l20 20\"/>"
	},
	settings: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>"
	},
	"settings-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 7h-9m3 10H5\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><circle cx=\"7\" cy=\"7\" r=\"3\"/></g>"
	},
	shapes: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"3.5\"/></g>"
	},
	share: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4l-4 4m4-4v13\"/>"
	},
	"share-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><path d=\"m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98\"/></g>"
	},
	sheet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M3 9h18M3 15h18M9 9v12m6-12v12\"/></g>"
	},
	shell: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 11a2 2 0 1 1-4 0a4 4 0 0 1 8 0a6 6 0 0 1-12 0a8 8 0 0 1 16 0a10 10 0 1 1-20 0a11.93 11.93 0 0 1 2.42-7.22a2 2 0 1 1 3.16 2.44\"/>"
	},
	shield: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/>"
	},
	"shield-alert": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01\"/>"
	},
	"shield-ban": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM4.243 5.21l14.39 12.472\"/>"
	},
	"shield-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12l2 2l4-4\"/></g>"
	},
	"shield-ellipsis": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM8 12h.01M12 12h.01M16 12h.01\"/>"
	},
	"shield-half": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8 9V2\"/>"
	},
	"shield-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6\"/>"
	},
	"shield-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m2 2l20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264\"/>"
	},
	"shield-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6m-3-3v6\"/>"
	},
	"shield-question": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3m.08 4h.01\"/></g>"
	},
	"shield-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5\"/>"
	},
	ship: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 10.189V14m0-12v3m7 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6\"/><path d=\"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76\"/><path d=\"M2 21c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1\"/></g>"
	},
	"ship-wheel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 2v7.5M19 5l-5.23 5.23M22 12h-7.5m4.5 7l-5.23-5.23M12 14.5V22m-1.77-8.23L5 19m4.5-7H2m8.23-1.77L5 5\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/></g>"
	},
	shirt: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23\"/>"
	},
	"shopping-bag": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></g>"
	},
	"shopping-basket": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 11l-1 9m5-9l-4-7M2 11h20M3.5 11l1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4M4.5 15.5h15M5 11l4-7m0 7l1 9\"/>"
	},
	"shopping-cart": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"8\" cy=\"21\" r=\"1\"/><circle cx=\"19\" cy=\"21\" r=\"1\"/><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"/></g>"
	},
	shovel: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 22v-5l5-5l5 5l-5 5zm7.5-7.5L16 8m1-6l5 5l-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5z\"/>"
	},
	"shower-head": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4 4l2.5 2.5m7 0a4.95 4.95 0 0 0-7 7M15 5L5 15m9 2v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01\"/>"
	},
	shrink: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m15 15l6 6m-6-6v4.8m0-4.8h4.8M9 19.8V15m0 0H4.2M9 15l-6 6M15 4.2V9m0 0h4.8M15 9l6-6M9 4.2V9m0 0H4.2M9 9L3 3\"/>"
	},
	shrub: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 22v-7l-2-2\"/><path d=\"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0m-3 6l-2 2\"/></g>"
	},
	shuffle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m18 14l4 4l-4 4m0-20l4 4l-4 4\"/><path d=\"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45\"/></g>"
	},
	sigma: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2\"/>"
	},
	signal: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16\"/>"
	},
	"signal-high": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20h.01M7 20v-4m5 4v-8m5 8V8\"/>"
	},
	"signal-low": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20h.01M7 20v-4\"/>"
	},
	"signal-medium": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20h.01M7 20v-4m5 4v-8\"/>"
	},
	"signal-zero": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 20h.01\"/>"
	},
	signature: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21 17l-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284M3 21h18\"/>"
	},
	signpost: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 13v8m0-18v3m6 0a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z\"/>"
	},
	"signpost-big": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 9H4L2 7l2-2h6m4 0h6l2 2l-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8\"/>"
	},
	siren: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 18v-6a5 5 0 1 1 10 0v6M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2zm16-9h1m-3.5-7.5L18 5M2 12h1m9-10v1M4.929 4.929l.707.707M12 12v6\"/>"
	},
	"skip-back": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 20L9 12l10-8zM5 19V5\"/>"
	},
	"skip-forward": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5 4l10 8l-10 8zm14 1v14\"/>"
	},
	skull: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12.5 17l-.5-1l-.5 1z\"/><path d=\"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25a8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"12\" r=\"1\"/></g>"
	},
	slack: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"3\" height=\"8\" x=\"13\" y=\"2\" rx=\"1.5\"/><path d=\"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5\"/><rect width=\"3\" height=\"8\" x=\"8\" y=\"14\" rx=\"1.5\"/><path d=\"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5\"/><rect width=\"8\" height=\"3\" x=\"14\" y=\"13\" rx=\"1.5\"/><path d=\"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5\"/><rect width=\"8\" height=\"3\" x=\"2\" y=\"8\" rx=\"1.5\"/><path d=\"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5\"/></g>"
	},
	slash: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 2L2 22\"/>"
	},
	slice: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14\"/>"
	},
	"sliders-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4\"/>"
	},
	"sliders-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4\"/>"
	},
	smartphone: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/></g>"
	},
	"smartphone-charging": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12.667 8L10 12h4l-2.667 4\"/></g>"
	},
	"smartphone-nfc": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"7\" height=\"12\" x=\"2\" y=\"6\" rx=\"1\"/><path d=\"M13 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M19.91 4.1a15.91 15.91 0 0 1 .01 15.8\"/></g>"
	},
	smile: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01\"/></g>"
	},
	"smile-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 11v1a10 10 0 1 1-9-10\"/><path d=\"M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6\"/></g>"
	},
	snail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 13a6 6 0 1 0 12 0a4 4 0 1 0-8 0a2 2 0 0 0 4 0\"/><circle cx=\"10\" cy=\"13\" r=\"8\"/><path d=\"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6m0-10l1.1 2.2M22 3l-1.1 2.2\"/></g>"
	},
	snowflake: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6\"/><path d=\"m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2\"/><path d=\"M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4\"/></g>"
	},
	sofa: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3\"/><path d=\"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m16-2v2M12 4v9\"/></g>"
	},
	soup: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9m-5 0h10m2.5-9L22 6m-5.75-3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.73 1.62m-5.48-5c.27.1.8.53.74 1.36c-.05.83-.93 1.2-.98 2.02c-.06.78.33 1.24.72 1.62M6.25 3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.74 1.62\"/>"
	},
	space: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1\"/>"
	},
	spade: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2c1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7zm7 9v4\"/>"
	},
	sparkle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/>"
	},
	sparkles: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4m2-2h-4M4 17v2m1-1H3\"/>"
	},
	speaker: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M12 6h.01\"/><circle cx=\"12\" cy=\"14\" r=\"4\"/><path d=\"M12 14h.01\"/></g>"
	},
	speech: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.8 5.8 0 0 1 .029 2.758L2 20m17.8-2.2a7.5 7.5 0 0 0 .003-10.603M17 15a3.5 3.5 0 0 0-.025-4.975\"/>"
	},
	"spell-check": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 16l6-12l6 12M8 12h8m0 8l2 2l4-4\"/>"
	},
	"spell-check-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 16l6-12l6 12M8 12h8M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1c1.1 0 1.1 1 2.3 1c1.1 0 1.1-1 2.3-1c1.1 0 1.1 1 2.3 1c1.1 0 1.1-1 2.3-1\"/>"
	},
	spline: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><path d=\"M5 17A12 12 0 0 1 17 5\"/></g>"
	},
	split: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 3h5v5M8 3H3v5\"/><path d=\"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6\"/></g>"
	},
	"spray-can": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3h.01M7 5h.01M11 7h.01M3 7h.01M7 9h.01M3 11h.01M15 5h4v4h-4zm4 4l2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2m-2 5l8-2m-8 7l8-2\"/>"
	},
	sprout: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 20h10m-7 0c5.5-2.5.8-6.4 3-10\"/><path d=\"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3c-1.2-.6-2.3-1.9-3-4.2c2.8-.5 4.4 0 5.5.8M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4c1-1 1.6-2.3 1.7-4.6c-2.7.1-4 1-4.9 2\"/></g>"
	},
	square: {
		body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" rx=\"2\"/>"
	},
	"square-activity": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M17 12h-2l-2 5l-2-10l-2 5H7\"/></g>"
	},
	"square-arrow-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 8v8m-4-4l4 4l4-4\"/></g>"
	},
	"square-arrow-down-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 8l-8 8m8 0H8V8\"/></g>"
	},
	"square-arrow-down-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m8 8l8 8m0-8v8H8\"/></g>"
	},
	"square-arrow-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m12 8l-4 4l4 4m4-4H8\"/></g>"
	},
	"square-arrow-out-down-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m0 10l9-9m-3 9H3v-6\"/>"
	},
	"square-arrow-out-down-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10 0l-9-9m9 3v6h-6\"/>"
	},
	"square-arrow-out-up-left": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6M3 3l9 9M3 9V3h6\"/>"
	},
	"square-arrow-out-up-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m10 0l-9 9m3-9h6v6\"/>"
	},
	"square-arrow-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8m-4 4l4-4l-4-4\"/></g>"
	},
	"square-arrow-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 12l-4-4l-4 4m4 4V8\"/></g>"
	},
	"square-arrow-up-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 16V8h8m0 8L8 8\"/></g>"
	},
	"square-arrow-up-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 8h8v8m-8 0l8-8\"/></g>"
	},
	"square-asterisk": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 8v8m-3.5-2l7-4m-7 0l7 4\"/></g>"
	},
	"square-bottom-dashed-scissors": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2m-10 0H8m8 0h-2\"/><circle cx=\"8\" cy=\"8\" r=\"2\"/><path d=\"M9.414 9.414L12 12m2.8 2.8L18 18\"/><circle cx=\"8\" cy=\"16\" r=\"2\"/><path d=\"m18 6l-8.586 8.586\"/></g>"
	},
	"square-chart-gantt": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 8h7m-8 4h6m-3 4h5\"/></g>"
	},
	"square-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m9 12l2 2l4-4\"/></g>"
	},
	"square-check-big": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5\"/><path d=\"m9 11l3 3L22 4\"/></g>"
	},
	"square-chevron-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 10l-4 4l-4-4\"/></g>"
	},
	"square-chevron-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m14 16l-4-4l4-4\"/></g>"
	},
	"square-chevron-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m10 8l4 4l-4 4\"/></g>"
	},
	"square-chevron-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m8 14l4-4l4 4\"/></g>"
	},
	"square-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 9.5L8 12l2 2.5m4-5l2 2.5l-2 2.5\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"square-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1\"/>"
	},
	"square-dashed-bottom": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1m4 0h1\"/>"
	},
	"square-dashed-bottom-code": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 9.5L8 12l2 2.5m4 6.5h1M14 9.5l2 2.5l-2 2.5\"/><path d=\"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1\"/></g>"
	},
	"square-dashed-kanban": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7v7m4-7v4m4-4v9M5 3a2 2 0 0 0-2 2m6-2h1m4 0h1m4 0a2 2 0 0 1 2 2m0 4v1m0 4v1m0 4a2 2 0 0 1-2 2m-5 0h1m-6 0h1m-5 0a2 2 0 0 1-2-2m0-5v1m0-6v1\"/>"
	},
	"square-dashed-mouse-pointer": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h2m3-18h1M3 9v1m18-1v2M3 14v1\"/>"
	},
	"square-divide": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M8 12h8m-4-4\"/></g>"
	},
	"square-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></g>"
	},
	"square-equal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 10h10M7 14h10\"/></g>"
	},
	"square-function": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3m-6 4.2h5.7\"/></g>"
	},
	"square-kanban": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 7v7m4-7v4m4-4v9\"/></g>"
	},
	"square-library": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7v10m4-10v10m4-10l2 10\"/></g>"
	},
	"square-m": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 16V8l4 4l4-4v8\"/></g>"
	},
	"square-menu": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 8h10M7 12h10M7 16h10\"/></g>"
	},
	"square-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8\"/></g>"
	},
	"square-mouse-pointer": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z\"/><path d=\"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"/></g>"
	},
	"square-parking": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/></g>"
	},
	"square-parking-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41M3 8.7V19a2 2 0 0 0 2 2h10.3M2 2l20 20\"/><path d=\"M13 13a3 3 0 1 0 0-6H9v2m0 8v-2.3\"/></g>"
	},
	"square-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"/></g>"
	},
	"square-percent": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m15 9l-6 6m0-6h.01M15 15h.01\"/></g>"
	},
	"square-pi": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7h10m-7 0v10m6 0a2 2 0 0 1-2-2V7\"/></g>"
	},
	"square-pilcrow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 12H9.5a2.5 2.5 0 0 1 0-5H17m-5 0v10m4-10v10\"/></g>"
	},
	"square-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m9 8l6 4l-6 4Z\"/></g>"
	},
	"square-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8m-4-4v8\"/></g>"
	},
	"square-power": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 7v4M7.998 9.003a5 5 0 1 0 8-.005\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"square-radical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 12h2l2 5l2-10h4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"square-scissors": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"2\"/><path d=\"M9.414 9.414L12 12m2.8 2.8L18 18\"/><circle cx=\"8\" cy=\"16\" r=\"2\"/><path d=\"m18 6l-8.586 8.586\"/></g>"
	},
	"square-sigma": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M16 8.9V7H8l4 5l-4 5h8v-1.9\"/></g>"
	},
	"square-slash": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m9 15l6-6\"/></g>"
	},
	"square-split-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3m8 0h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3M12 4v16\"/>"
	},
	"square-split-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3m0 8v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3m-1-4h16\"/>"
	},
	"square-square": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><rect width=\"8\" height=\"8\" x=\"8\" y=\"8\" rx=\"1\"/></g>"
	},
	"square-stack": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\"/><rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\"/></g>"
	},
	"square-terminal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m7 11l2-2l-2-2m4 6h4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/></g>"
	},
	"square-user": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2\"/></g>"
	},
	"square-user-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 21a6 6 0 0 0-12 0\"/><circle cx=\"12\" cy=\"11\" r=\"4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"square-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"m15 9l-6 6m0-6l6 6\"/></g>"
	},
	squircle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9\"/>"
	},
	squirrel: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.236 22a3 3 0 0 0-2.2-5\"/><path d=\"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4m0 9h.01\"/><path d=\"M18 6a4 4 0 0 0-4 4a7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0a2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10\"/></g>"
	},
	stamp: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 22h14m.27-8.27A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77\"/><path d=\"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13\"/></g>"
	},
	star: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z\"/>"
	},
	"star-half": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2\"/>"
	},
	"star-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.34 8.34L2 9.27l5 4.87L5.82 21L12 17.77L18.18 21l-.59-3.43m.83-4.81L22 9.27l-6.91-1L12 2l-1.44 2.91M2 2l20 20\"/>"
	},
	"step-back": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 20V4m-4 16L4 12l10-8z\"/>"
	},
	"step-forward": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 4v16m4-16l10 8l-10 8z\"/>"
	},
	stethoscope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\"/><path d=\"M8 15a6 6 0 0 0 12 0v-3\"/><circle cx=\"20\" cy=\"10\" r=\"2\"/></g>"
	},
	sticker: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5z\"/><path d=\"M14 3v4a2 2 0 0 0 2 2h4M8 13h.01M16 13h.01M10 16s.8 1 2 1c1.3 0 2-1 2-1\"/></g>"
	},
	"sticky-note": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z\"/><path d=\"M15 3v4a2 2 0 0 0 2 2h4\"/></g>"
	},
	store: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 7l4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4M2 7h20m0 0v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63a.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\"/></g>"
	},
	"stretch-horizontal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"20\" height=\"6\" x=\"2\" y=\"14\" rx=\"2\"/></g>"
	},
	"stretch-vertical": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><rect width=\"6\" height=\"20\" x=\"14\" y=\"2\" rx=\"2\"/></g>"
	},
	strikethrough: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6m-2-8h16\"/>"
	},
	subscript: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4 5l8 8m0-8l-8 8m16 6h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07\"/>"
	},
	sun: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"/></g>"
	},
	"sun-dim": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 4h.01M20 12h.01M12 20h.01M4 12h.01m13.647-5.657h.01m-.01 11.314h.01m-11.324 0h.01m-.01-11.314h.01\"/></g>"
	},
	"sun-medium": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707\"/></g>"
	},
	"sun-moon": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8a2.83 2.83 0 0 0 4 4a4 4 0 1 1-4-4m0-6v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4\"/>"
	},
	"sun-snow": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5l1.25-2.5L18 18M14 4l1.25 2.5L18 6\"/><path d=\"m17 21l-3-6l1.5-3H22m-5-9l-3 6l1.5 3M2 12h1\"/><path d=\"m20 10l-1.5 2l1.5 2M3.64 18.36l.7-.7m0-11.32l-.7-.7\"/></g>"
	},
	sunrise: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v8m-7.07.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M8 6l4-4l4 4m0 12a4 4 0 0 0-8 0\"/>"
	},
	sunset: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 10V2m-7.07 8.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M16 6l-4 4l-4-4m8 12a4 4 0 0 0-8 0\"/>"
	},
	superscript: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4 19l8-8m0 8l-8-8m16 1h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06\"/>"
	},
	"swatch-book": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z\"/><path d=\"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7m0-4h.01\"/><path d=\"m11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8\"/></g>"
	},
	"swiss-franc": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 21V3h8M6 16h9m-5-6.5h7\"/>"
	},
	"switch-camera": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m4 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m18 22l-3-3l3-3M6 2l3 3l-3 3\"/></g>"
	},
	sword: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6m-3 3l4 4m-1 1l2-2\"/>"
	},
	swords: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6m-3 3l4 4m-1 1l2-2M14.5 6.5L18 3h3v3l-3.5 3.5M5 14l4 4m-2-1l-3 3m-1-1l2 2\"/>"
	},
	syringe: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18 2l4 4m-5 1l3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6l4 4m-8 4l-3 3M14 4l6 6\"/>"
	},
	table: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18M3 15h18\"/></g>"
	},
	"table-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"/>"
	},
	"table-cells-merge": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 21v-6m0-6V3M3 15h18M3 9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"table-cells-split": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 15V9m-9 6h18M3 9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></g>"
	},
	"table-columns-split": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 14v2m0 4v2m0-20v2m0 4v2M2 15h8M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2M2 9h8m12 6h-4m4-12h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2m0-12h-4M5 3v18\"/>"
	},
	"table-of-contents": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 12H3m13 6H3M16 6H3m18 6h.01M21 18h.01M21 6h.01\"/>"
	},
	"table-properties": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 9H3m18 6H3\"/></g>"
	},
	"table-rows-split": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 10h2m-1 12v-8m0-12v4M2 10h2m16 0h2M3 19h18M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2M8 10h2M9 22v-8M9 2v4\"/>"
	},
	tablet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/></g>"
	},
	"tablet-smartphone": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"10\" height=\"14\" x=\"3\" y=\"8\" rx=\"2\"/><path d=\"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4M8 18h.01\"/></g>"
	},
	tablets: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"7\" cy=\"7\" r=\"5\"/><circle cx=\"17\" cy=\"17\" r=\"5\"/><path d=\"M12 17h10M3.46 10.54l7.08-7.08\"/></g>"
	},
	tag: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\"/><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/></g>"
	},
	tags: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19\"/><path d=\"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z\"/><circle cx=\"6.5\" cy=\"9.5\" r=\".5\" fill=\"currentColor\"/></g>"
	},
	"tally-1": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16\"/>"
	},
	"tally-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16M9 4v16\"/>"
	},
	"tally-3": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16M9 4v16m5-16v16\"/>"
	},
	"tally-4": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16M9 4v16m5-16v16m5-16v16\"/>"
	},
	"tally-5": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4v16M9 4v16m5-16v16m5-16v16m3-14L2 18\"/>"
	},
	tangent: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"17\" cy=\"4\" r=\"2\"/><path d=\"M15.59 5.41L5.41 15.59\"/><circle cx=\"4\" cy=\"17\" r=\"2\"/><path d=\"M12 22s-4-9-1.5-11.5S22 12 22 12\"/></g>"
	},
	target: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></g>"
	},
	telescope: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21\"/><path d=\"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21\"/><circle cx=\"12\" cy=\"13\" r=\"2\"/></g>"
	},
	tent: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20\"/>"
	},
	"tent-tree": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"4\" cy=\"4\" r=\"2\"/><path d=\"m14 5l3-3l3 3m-6 5l3-3l3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8l5 8\"/></g>"
	},
	terminal: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m4 17l6-6l-6-6m8 14h8\"/>"
	},
	"test-tube": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2m-1 0h7m-1 14h-5\"/>"
	},
	"test-tube-diagonal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 7L6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3m-1-1l6 6m-10 8H4\"/>"
	},
	"test-tubes": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2m16 0v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2M3 2h7m4 0h7M9 16H4m16 0h-5\"/>"
	},
	text: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 6.1H3m18 6H3M15.1 18H3\"/>"
	},
	"text-cursor": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1M7 22h1a4 4 0 0 0 4-4v-1M7 2h1a4 4 0 0 1 4 4v1\"/>"
	},
	"text-cursor-input": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 4h1a3 3 0 0 1 3 3a3 3 0 0 1 3-3h1m0 16h-1a3 3 0 0 1-3-3a3 3 0 0 1-3 3H5m0-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1m8 0h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7M9 7v10\"/>"
	},
	"text-quote": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 6H3m18 6H8m13 6H8m-5-6v6\"/>"
	},
	"text-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 6H3m7 6H3m7 6H3\"/><circle cx=\"17\" cy=\"15\" r=\"3\"/><path d=\"m21 19l-1.9-1.9\"/></g>"
	},
	"text-select": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1M7 8h8m-8 4h10M7 16h6\"/>"
	},
	theater: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 10s3-3 3-8m17 8s-3-3-3-8\"/><path d=\"M10 2c0 4.4-3.6 8-8 8m12-8c0 4.4 3.6 8 8 8M2 10s2 2 2 5m18-5s-2 2-2 5M8 15h8M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m4 0v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"/></g>"
	},
	thermometer: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0\"/>"
	},
	"thermometer-snowflake": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m4.585 9H10m-8-3h6.5L10 9m10 5.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z\"/><path d=\"m4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h2\"/></g>"
	},
	"thermometer-sun": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 9a4 4 0 0 0-2 7.5M12 3v2M6.6 18.4l-1.4 1.4M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0M4 13H2m4.34-5.66L4.93 5.93\"/>"
	},
	"thumbs-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88\"/>"
	},
	"thumbs-up": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88\"/>"
	},
	ticket: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2\"/>"
	},
	"ticket-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"m9 12l2 2l4-4\"/></g>"
	},
	"ticket-minus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 3h6\"/>"
	},
	"ticket-percent": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 0h.01M15 9l-6 6m6 0h.01\"/>"
	},
	"ticket-plus": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 3h6m-3-3v6\"/>"
	},
	"ticket-slash": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7.5 5.5l5-5\"/>"
	},
	"ticket-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7.5 5.5l5-5m-5 0l5 5\"/>"
	},
	tickets: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2\"/><rect width=\"20\" height=\"13\" x=\"2\" y=\"8\" rx=\"2\"/></g>"
	},
	"tickets-plane": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5l3.75.5M4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2\"/><rect width=\"20\" height=\"13\" x=\"2\" y=\"8\" rx=\"2\"/></g>"
	},
	timer: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2h4m-2 12l3-3\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/></g>"
	},
	"timer-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7a8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1a8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2\"/>"
	},
	"timer-reset": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7a8 8 0 1 1-5.3 14L4 17.6\"/><path d=\"M9 17H4v5\"/></g>"
	},
	"toggle-left": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"6\" ry=\"6\"/><circle cx=\"8\" cy=\"12\" r=\"2\"/></g>"
	},
	"toggle-right": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"6\" ry=\"6\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/></g>"
	},
	toilet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 12h13a1 1 0 0 1 1 1a5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18\"/><path d=\"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8\"/></g>"
	},
	tornado: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 4H3m15 4H6m13 4H9m7 4h-6m1 4H9\"/>"
	},
	torus: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"11\" rx=\"3\" ry=\"2\"/><ellipse cx=\"12\" cy=\"12.5\" rx=\"10\" ry=\"8.5\"/></g>"
	},
	touchpad: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M2 14h20m-10 6v-6\"/></g>"
	},
	"touchpad-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16M2 14h12m8 0h-2m-8 6v-6M2 2l20 20m0-6V6a2 2 0 0 0-2-2H10\"/>"
	},
	"tower-control": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.2 12.27L20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73ZM8 13v9m8 0v-9M9 6l1 7m5-7l-1 7m-2-7V2m1 0h-2\"/>"
	},
	"toy-brick": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"12\" x=\"3\" y=\"8\" rx=\"1\"/><path d=\"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3\"/></g>"
	},
	tractor: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10 11l11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20m-4 0h-5\"/><path d=\"M18 5a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4m3 11h.01M8 10.1V4\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"15\" r=\"5\"/></g>"
	},
	"traffic-cone": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9.3 6.2a4.55 4.55 0 0 0 5.4 0m-6.8 4.5c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3\"/><path d=\"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6c0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z\"/><path d=\"m7.5 12.2l-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8\"/></g>"
	},
	"train-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m7 1l1-1\"/><path d=\"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Zm-1 0l-2 3m10-3l2 3\"/></g>"
	},
	"train-front-tunnel": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 22V12a10 10 0 1 1 20 0v10\"/><path d=\"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8m1 8.2h.01M14 15h.01\"/><path d=\"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Zm-1 0l-2 3m8-3l2 3\"/></g>"
	},
	"train-track": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 17L17 2M2 14l8 8M5 11l8 8M8 8l8 8M11 5l8 8M14 2l8 8M7 22L22 7\"/>"
	},
	"tram-front": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16m-8-8v8m-4 8l-2 3m12 0l-2-3m-8-4h.01M16 15h.01\"/></g>"
	},
	trash: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/>"
	},
	"trash-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6\"/>"
	},
	"tree-deciduous": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Zm4 0v3\"/>"
	},
	"tree-palm": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1l1 1h4m3-.86A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1l-1 1h-3\"/><path d=\"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25l.7-.7l.71-.71l2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35\"/><path d=\"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14\"/></g>"
	},
	"tree-pine": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3\"/>"
	},
	trees: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3\"/><path d=\"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5\"/></g>"
	},
	trello: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M7 7h3v9H7zm7 0h3v5h-3z\"/></g>"
	},
	"trending-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m22 17l-8.5-8.5l-5 5L2 7\"/><path d=\"M16 17h6v-6\"/></g>"
	},
	"trending-up": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m22 7l-8.5 8.5l-5-5L2 17\"/><path d=\"M16 7h6v6\"/></g>"
	},
	"trending-up-down": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14.828 14.828L21 21m0-5v5h-5m5-18l-9 9l-4-4l-6 6\"/><path d=\"M21 8V3h-5\"/></g>"
	},
	triangle: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"/>"
	},
	"triangle-alert": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01\"/>"
	},
	"triangle-dashed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2m-.126-13.257l1 1.732m1.975 3.477l1 1.732m1.975 3.496a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839m2.951-5.209l-1 1.732M8 21h2M8.102 7.743l-1 1.732\"/>"
	},
	"triangle-right": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z\"/>"
	},
	trophy: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16m-10-7.34V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m7-7.34V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0z\"/></g>"
	},
	truck: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/></g>"
	},
	turtle: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m12 10l2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9L8 10m7.18-2.1L12 10\"/><path d=\"M16.93 10H20a2 2 0 0 1 0 4H2\"/></g>"
	},
	tv: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"/><path d=\"m17 2l-5 5l-5-5\"/></g>"
	},
	"tv-minimal": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M7 21h10\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/></g>"
	},
	"tv-minimal-play": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64zM7 21h10\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/></g>"
	},
	twitch: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7\"/>"
	},
	twitter: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2\"/>"
	},
	type: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 7V4h16v3M9 20h6M12 4v16\"/>"
	},
	"type-outline": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z\"/>"
	},
	umbrella: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 12a10.06 10.06 1 0 0-20 0Zm-10 0v8a2 2 0 0 0 4 0M12 2v1\"/>"
	},
	"umbrella-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v1m3.5 18a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575M17.5 12H22A10 10 0 0 0 9.004 3.455M2 2l20 20\"/>"
	},
	underline: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 4v6a6 6 0 0 0 12 0V4M4 20h16\"/>"
	},
	undo: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 7v6h6\"/><path d=\"M21 17a9 9 0 0 0-9-9a9 9 0 0 0-6 2.3L3 13\"/></g>"
	},
	"undo-2": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 14L4 9l5-5\"/><path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11\"/></g>"
	},
	"undo-dot": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 17a9 9 0 0 0-15-6.7L3 13\"/><path d=\"M3 7v6h6\"/><circle cx=\"12\" cy=\"17\" r=\"1\"/></g>"
	},
	"unfold-horizontal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 12h6M8 12H2M12 2v2m0 4v2m0 4v2m0 4v2m7-7l3-3l-3-3M5 9l-3 3l3 3\"/>"
	},
	"unfold-vertical": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 22v-6m0-8V2M4 12H2m8 0H8m8 0h-2m8 0h-2m-5 7l-3 3l-3-3m6-14l-3-3l-3 3\"/>"
	},
	ungroup: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"6\" x=\"5\" y=\"4\" rx=\"1\"/><rect width=\"8\" height=\"6\" x=\"11\" y=\"14\" rx=\"1\"/></g>"
	},
	university: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"10\" r=\"1\"/><path d=\"M22 20V8h-4l-6-4l-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M6 17v.01M6 13v.01M18 17v.01M18 13v.01\"/><path d=\"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5\"/></g>"
	},
	unlink: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3\"/>"
	},
	"unlink-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2\"/>"
	},
	unplug: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 5l3-3M2 22l3-3m1.3 1.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4Zm1.2-6.8L10 11m.5 5.5L13 14m-1-8l6 6l2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z\"/>"
	},
	upload: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5l-5 5m5-5v12\"/>"
	},
	usb: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"10\" cy=\"7\" r=\"1\"/><circle cx=\"4\" cy=\"20\" r=\"1\"/><path d=\"M4.7 19.3L19 5m2-2l-3 1l2 2ZM9.26 7.68L5 12l2 5m3-3l5 2l3.5-3.5\"/><path d=\"m18 12l1-1l1 1l-1 1Z\"/></g>"
	},
	user: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></g>"
	},
	"user-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"m16 11l2 2l4-4\"/></g>"
	},
	"user-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"15\" r=\"3\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4\"/></g>"
	},
	"user-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 11h-6\"/></g>"
	},
	"user-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"7\" r=\"4\"/></g>"
	},
	"user-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M19 8v6m3-3h-6\"/></g>"
	},
	"user-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"8\" r=\"5\"/><path d=\"M20 21a8 8 0 0 0-16 0\"/></g>"
	},
	"user-round-check": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"m16 19l2 2l4-4\"/></g>"
	},
	"user-round-cog": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 10.434-7.62\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"m19.5 14.3l-.4.9m-2.2 5.6l-.4.9m5.2-2.2l-.9-.4m-5.6-2.2l-.9-.4m7.4 0l-.9.4m-5.6 2.2l-.9.4m5.2 2.2l-.4-.9m-2.2-5.6l-.4-.9\"/></g>"
	},
	"user-round-minus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M22 19h-6\"/></g>"
	},
	"user-round-pen": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 10.821-7.487m8.557 3.113a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/></g>"
	},
	"user-round-plus": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M19 16v6m3-3h-6\"/></g>"
	},
	"user-round-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M2 21a8 8 0 0 1 10.434-7.62\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"m22 22l-1.9-1.9\"/></g>"
	},
	"user-round-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 11.873-7\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"m17 17l5 5m0-5l-5 5\"/></g>"
	},
	"user-search": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"10\" cy=\"7\" r=\"4\"/><path d=\"M10.3 15H7a4 4 0 0 0-4 4v2\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><path d=\"m21 21l-1.9-1.9\"/></g>"
	},
	"user-x": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"m17 8l5 5m0-5l-5 5\"/></g>"
	},
	users: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75\"/></g>"
	},
	"users-round": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 21a8 8 0 0 0-16 0\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"/></g>"
	},
	utensils: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7\"/>"
	},
	"utensils-crossed": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0l7 7m-19.9-.2l6.4-6.3M19 5l-7 7\"/>"
	},
	"utility-pole": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0l-7 7l-7-7\"/>"
	},
	variable: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6\"/>"
	},
	vault: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m7.9 7.9l2.7 2.7\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m13.4 10.6l2.7-2.7\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m7.9 16.1l2.7-2.7\"/><circle cx=\"16.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m13.4 13.4l2.7 2.7\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></g>"
	},
	vegan: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M16 8q6 0 6-6q-6 0-6 6\"/><path d=\"M17.41 3.59a10 10 0 1 0 3 3\"/><path d=\"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14\"/></g>"
	},
	"venetian-mask": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 11c-1.5 0-2.5.5-3 2\"/><path d=\"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2a8 8 0 0 0-5-2z\"/><path d=\"M6 11c1.5 0 2.5.5 3 2\"/></g>"
	},
	vibrate: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 8l2 2l-2 2l2 2l-2 2m20-8l-2 2l2 2l-2 2l2 2\"/><rect width=\"8\" height=\"14\" x=\"8\" y=\"5\" rx=\"1\"/></g>"
	},
	"vibrate-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m2 8l2 2l-2 2l2 2l-2 2m20-8l-2 2l2 2l-2 2l2 2M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2m0-5.66V6c0-.55-.45-1-1-1h-4.34M2 2l20 20\"/>"
	},
	video: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\"/><rect width=\"14\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/></g>"
	},
	"video-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2M2 2l20 20\"/>"
	},
	videotape: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M2 8h20\"/><circle cx=\"8\" cy=\"14\" r=\"2\"/><path d=\"M8 12h8\"/><circle cx=\"16\" cy=\"14\" r=\"2\"/></g>"
	},
	view: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0\"/></g>"
	},
	voicemail: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"12\" r=\"4\"/><circle cx=\"18\" cy=\"12\" r=\"4\"/><path d=\"M6 16h12\"/></g>"
	},
	volleyball: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5m13.5-3.4a16.55 16.55 0 0 1-9 7.5\"/><path d=\"M20.7 17a12.8 12.8 0 0 0-8.7-5a13.3 13.3 0 0 1 0-10M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"
	},
	volume: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"/>"
	},
	"volume-1": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6\"/>"
	},
	"volume-2": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728\"/>"
	},
	"volume-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 9a5 5 0 0 1 .95 2.293m2.414-5.657a9 9 0 0 1 1.889 9.96M2 2l20 20M7 7l-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11M9.828 4.172A.686.686 0 0 1 11 4.657v.686\"/>"
	},
	"volume-x": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM22 9l-6 6m0-6l6 6\"/>"
	},
	vote: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m9 12l2 2l4-4\"/><path d=\"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5zm17 12H2\"/></g>"
	},
	wallet: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/></g>"
	},
	"wallet-cards": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21\"/></g>"
	},
	"wallet-minimal": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 14h.01M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14\"/>"
	},
	wallpaper: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"8\" cy=\"9\" r=\"2\"/><path d=\"m9 17l6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M8 21h8m-4-4v4\"/></g>"
	},
	wand: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-4-4h.01m2.79-2.8L19 5M3 21l9-9m.2-5.8L11 5\"/>"
	},
	"wand-sparkles": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9\"/>"
	},
	warehouse: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35M6 18h12M6 14h12\"/><path d=\"M6 10h12v12H6z\"/></g>"
	},
	"washing-machine": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 6h3m11 0h.01\"/><rect width=\"18\" height=\"20\" x=\"3\" y=\"2\" rx=\"2\"/><circle cx=\"12\" cy=\"13\" r=\"5\"/><path d=\"M12 18a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 1 0-5\"/></g>"
	},
	watch: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"6\"/><path d=\"M12 10v2l1 1m3.13-5.34l-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7l.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05\"/></g>"
	},
	waves: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1\"/>"
	},
	"waves-ladder": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M19 5a2 2 0 0 0-2 2v11\"/><path d=\"M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M7 13h10M7 9h10\"/><path d=\"M9 5a2 2 0 0 0-2 2v11\"/></g>"
	},
	waypoints: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"4.5\" r=\"2.5\"/><path d=\"m10.2 6.3l-3.9 3.9\"/><circle cx=\"4.5\" cy=\"12\" r=\"2.5\"/><path d=\"M7 12h10\"/><circle cx=\"19.5\" cy=\"12\" r=\"2.5\"/><path d=\"m13.8 17.7l3.9-3.9\"/><circle cx=\"12\" cy=\"19.5\" r=\"2.5\"/></g>"
	},
	webcam: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"10\" r=\"8\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 22h10m-5 0v-4\"/></g>"
	},
	webhook: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2\"/><path d=\"m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06\"/><path d=\"m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8\"/></g>"
	},
	"webhook-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66\"/><path d=\"m6 17l3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20\"/></g>"
	},
	weight: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"5\" r=\"3\"/><path d=\"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z\"/></g>"
	},
	wheat: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4\"/><path d=\"M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0\"/></g>"
	},
	"wheat-off": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m2 22l10-10m4-4l-1.17 1.17M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M8 8l-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97m-.6-6.24c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4\"/><path d=\"M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0M16 16l-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 1.97-.98m6.24.6c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28M2 2l20 20\"/></g>"
	},
	"whole-word": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"7\" cy=\"12\" r=\"3\"/><path d=\"M10 9v6\"/><circle cx=\"17\" cy=\"12\" r=\"3\"/><path d=\"M14 7v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1\"/></g>"
	},
	wifi: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0\"/>"
	},
	"wifi-high": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h.01M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0\"/>"
	},
	"wifi-low": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h.01M8.5 16.429a5 5 0 0 1 7 0\"/>"
	},
	"wifi-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69m8.83 2.69a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20\"/>"
	},
	"wifi-zero": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 20h.01\"/>"
	},
	wind: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2\"/>"
	},
	"wind-arrow-down": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 2v8m2.8 11.6A2 2 0 1 0 14 18H2m15.5-8a2.5 2.5 0 1 1 2 4H2m4-8l4 4l4-4\"/>"
	},
	wine: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5\"/>"
	},
	"wine-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 22h8M7 10h3m7 0h-1.343M12 15v7M7.307 7.307A12.3 12.3 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981Q8.807 2.511 9 2h6c1.5 4 2 6 2 8q-.001.613-.145 1.198M2 2l20 20\"/>"
	},
	workflow: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"8\" height=\"8\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 11v4a2 2 0 0 0 2 2h4\"/><rect width=\"8\" height=\"8\" x=\"13\" y=\"13\" rx=\"2\"/></g>"
	},
	worm: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 12l-1.5 3m2.13 3.81L22 20M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z\"/>"
	},
	"wrap-text": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 6h18M3 12h15a3 3 0 1 1 0 6h-4\"/><path d=\"m16 16l-2 2l2 2M3 18h7\"/></g>"
	},
	wrench: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>"
	},
	x: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 6L6 18M6 6l12 12\"/>"
	},
	youtube: {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17\"/><path d=\"m10 15l5-3l-5-3z\"/></g>"
	},
	zap: {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>"
	},
	"zap-off": {
		body: "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.513 4.856L13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773m-2.787 2.87L10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643M2 2l20 20\"/>"
	},
	"zoom-in": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.35-4.35M11 8v6m-3-3h6\"/></g>"
	},
	"zoom-out": {
		body: "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21l-4.35-4.35M8 11h6\"/></g>"
	}
};
var aliases = {
	"activity-square": {
		parent: "square-activity"
	},
	"alarm-check": {
		parent: "alarm-clock-check"
	},
	"alarm-minus": {
		parent: "alarm-clock-minus"
	},
	"alarm-plus": {
		parent: "alarm-clock-plus"
	},
	"alert-circle": {
		parent: "circle-alert"
	},
	"alert-octagon": {
		parent: "octagon-alert"
	},
	"alert-triangle": {
		parent: "triangle-alert"
	},
	"align-horizonal-distribute-center": {
		parent: "align-horizontal-distribute-center"
	},
	"align-horizonal-distribute-end": {
		parent: "align-horizontal-distribute-end"
	},
	"align-horizonal-distribute-start": {
		parent: "align-horizontal-distribute-start"
	},
	"arrow-down-01": {
		parent: "arrow-down-0-1"
	},
	"arrow-down-10": {
		parent: "arrow-down-1-0"
	},
	"arrow-down-az": {
		parent: "arrow-down-a-z"
	},
	"arrow-down-circle": {
		parent: "circle-arrow-down"
	},
	"arrow-down-left-from-circle": {
		parent: "circle-arrow-out-down-left"
	},
	"arrow-down-left-from-square": {
		parent: "square-arrow-out-down-left"
	},
	"arrow-down-left-square": {
		parent: "square-arrow-down-left"
	},
	"arrow-down-right-from-circle": {
		parent: "circle-arrow-out-down-right"
	},
	"arrow-down-right-from-square": {
		parent: "square-arrow-out-down-right"
	},
	"arrow-down-right-square": {
		parent: "square-arrow-down-right"
	},
	"arrow-down-square": {
		parent: "square-arrow-down"
	},
	"arrow-down-za": {
		parent: "arrow-down-z-a"
	},
	"arrow-left-circle": {
		parent: "circle-arrow-left"
	},
	"arrow-left-square": {
		parent: "square-arrow-left"
	},
	"arrow-right-circle": {
		parent: "circle-arrow-right"
	},
	"arrow-right-square": {
		parent: "square-arrow-right"
	},
	"arrow-up-01": {
		parent: "arrow-up-0-1"
	},
	"arrow-up-10": {
		parent: "arrow-up-1-0"
	},
	"arrow-up-az": {
		parent: "arrow-up-a-z"
	},
	"arrow-up-circle": {
		parent: "circle-arrow-up"
	},
	"arrow-up-left-from-circle": {
		parent: "circle-arrow-out-up-left"
	},
	"arrow-up-left-from-square": {
		parent: "square-arrow-out-up-left"
	},
	"arrow-up-left-square": {
		parent: "square-arrow-up-left"
	},
	"arrow-up-right-from-circle": {
		parent: "circle-arrow-out-up-right"
	},
	"arrow-up-right-from-square": {
		parent: "square-arrow-out-up-right"
	},
	"arrow-up-right-square": {
		parent: "square-arrow-up-right"
	},
	"arrow-up-square": {
		parent: "square-arrow-up"
	},
	"arrow-up-za": {
		parent: "arrow-up-z-a"
	},
	"asterisk-square": {
		parent: "square-asterisk"
	},
	"axis-3-d": {
		parent: "axis-3d"
	},
	"bar-chart": {
		parent: "chart-no-axes-column-increasing"
	},
	"bar-chart-2": {
		parent: "chart-no-axes-column"
	},
	"between-horizonal-end": {
		parent: "between-horizontal-end"
	},
	"between-horizonal-start": {
		parent: "between-horizontal-start"
	},
	"book-template": {
		parent: "book-dashed"
	},
	"box-select": {
		parent: "square-dashed"
	},
	"check-circle": {
		parent: "circle-check-big"
	},
	"check-circle-2": {
		parent: "circle-check"
	},
	"check-square": {
		parent: "square-check-big"
	},
	"check-square-2": {
		parent: "square-check"
	},
	"chevron-down-circle": {
		parent: "circle-chevron-down"
	},
	"chevron-down-square": {
		parent: "square-chevron-down"
	},
	"chevron-left-circle": {
		parent: "circle-chevron-left"
	},
	"chevron-left-square": {
		parent: "square-chevron-left"
	},
	"chevron-right-circle": {
		parent: "circle-chevron-right"
	},
	"chevron-right-square": {
		parent: "square-chevron-right"
	},
	"chevron-up-circle": {
		parent: "circle-chevron-up"
	},
	"chevron-up-square": {
		parent: "square-chevron-up"
	},
	"circle-slashed": {
		parent: "circle-slash-2"
	},
	"clipboard-edit": {
		parent: "clipboard-pen"
	},
	"clipboard-signature": {
		parent: "clipboard-pen-line"
	},
	"code-2": {
		parent: "code-xml"
	},
	"code-square": {
		parent: "square-code"
	},
	columns: {
		parent: "columns-2"
	},
	"contact-2": {
		parent: "contact-round"
	},
	"curly-braces": {
		parent: "braces"
	},
	"divide-circle": {
		parent: "circle-divide"
	},
	"divide-square": {
		parent: "square-divide"
	},
	"dot-square": {
		parent: "square-dot"
	},
	"download-cloud": {
		parent: "cloud-download"
	},
	edit: {
		parent: "square-pen"
	},
	"edit-2": {
		parent: "pen"
	},
	"edit-3": {
		parent: "pen-line"
	},
	"equal-square": {
		parent: "square-equal"
	},
	"file-axis-3-d": {
		parent: "file-axis-3d"
	},
	"file-bar-chart": {
		parent: "file-chart-column-increasing"
	},
	"file-bar-chart-2": {
		parent: "file-chart-column"
	},
	"file-cog-2": {
		parent: "file-cog"
	},
	"file-edit": {
		parent: "file-pen"
	},
	"file-line-chart": {
		parent: "file-chart-line"
	},
	"file-signature": {
		parent: "file-pen-line"
	},
	"folder-cog-2": {
		parent: "folder-cog"
	},
	"folder-edit": {
		parent: "folder-pen"
	},
	"fork-knife": {
		parent: "utensils"
	},
	"fork-knife-crossed": {
		parent: "utensils-crossed"
	},
	"form-input": {
		parent: "rectangle-ellipsis"
	},
	"function-square": {
		parent: "square-function"
	},
	"gantt-chart": {
		parent: "chart-no-axes-gantt"
	},
	"gantt-chart-square": {
		parent: "square-chart-gantt"
	},
	"gauge-circle": {
		parent: "circle-gauge"
	},
	"git-commit": {
		parent: "git-commit-horizontal"
	},
	"globe-2": {
		parent: "earth"
	},
	grid: {
		parent: "grid-3x3"
	},
	"grid-2-x-2": {
		parent: "grid-2x2"
	},
	"grid-2-x-2-check": {
		parent: "grid-2x2-check"
	},
	"grid-2-x-2-plus": {
		parent: "grid-2x2-plus"
	},
	"grid-2-x-2-x": {
		parent: "grid-2x2-x"
	},
	"grid-3-x-3": {
		parent: "grid-3x3"
	},
	"help-circle": {
		parent: "circle-help"
	},
	"helping-hand": {
		parent: "hand-helping"
	},
	home: {
		parent: "house"
	},
	"ice-cream": {
		parent: "ice-cream-cone"
	},
	"ice-cream-2": {
		parent: "ice-cream-bowl"
	},
	indent: {
		parent: "indent-increase"
	},
	inspect: {
		parent: "square-mouse-pointer"
	},
	"jersey-pound": {
		parent: "japanese-yen"
	},
	"kanban-square": {
		parent: "square-kanban"
	},
	"kanban-square-dashed": {
		parent: "square-dashed-kanban"
	},
	"laptop-2": {
		parent: "laptop-minimal"
	},
	layout: {
		parent: "panels-top-left"
	},
	"library-square": {
		parent: "square-library"
	},
	"loader-2": {
		parent: "loader-circle"
	},
	"m-square": {
		parent: "square-m"
	},
	"menu-square": {
		parent: "square-menu"
	},
	"mic-2": {
		parent: "mic-vocal"
	},
	"minus-circle": {
		parent: "circle-minus"
	},
	"minus-square": {
		parent: "square-minus"
	},
	"more-horizontal": {
		parent: "ellipsis"
	},
	"more-vertical": {
		parent: "ellipsis-vertical"
	},
	"mouse-pointer-square": {
		parent: "square-mouse-pointer"
	},
	"mouse-pointer-square-dashed": {
		parent: "square-dashed-mouse-pointer"
	},
	"move-3-d": {
		parent: "move-3d"
	},
	outdent: {
		parent: "indent-decrease"
	},
	"paintbrush-2": {
		parent: "paintbrush-vertical"
	},
	palmtree: {
		parent: "tree-palm"
	},
	"panel-bottom-inactive": {
		parent: "panel-bottom-dashed"
	},
	"panel-left-inactive": {
		parent: "panel-left-dashed"
	},
	"panel-right-inactive": {
		parent: "panel-right-dashed"
	},
	"panel-top-inactive": {
		parent: "panel-top-dashed"
	},
	"panels-left-right": {
		parent: "columns-3"
	},
	"panels-top-bottom": {
		parent: "rows-3"
	},
	"parking-circle": {
		parent: "circle-parking"
	},
	"parking-circle-off": {
		parent: "circle-parking-off"
	},
	"parking-square": {
		parent: "square-parking"
	},
	"parking-square-off": {
		parent: "square-parking-off"
	},
	"pause-circle": {
		parent: "circle-pause"
	},
	"pause-octagon": {
		parent: "octagon-pause"
	},
	"pen-box": {
		parent: "square-pen"
	},
	"pen-square": {
		parent: "square-pen"
	},
	"percent-circle": {
		parent: "circle-percent"
	},
	"percent-diamond": {
		parent: "diamond-percent"
	},
	"percent-square": {
		parent: "square-percent"
	},
	"pi-square": {
		parent: "square-pi"
	},
	"pilcrow-square": {
		parent: "square-pilcrow"
	},
	"play-circle": {
		parent: "circle-play"
	},
	"play-square": {
		parent: "square-play"
	},
	"plug-zap-2": {
		parent: "plug-zap"
	},
	"plus-circle": {
		parent: "circle-plus"
	},
	"plus-square": {
		parent: "square-plus"
	},
	"power-circle": {
		parent: "circle-power"
	},
	"power-square": {
		parent: "square-power"
	},
	"rotate-3-d": {
		parent: "rotate-3d"
	},
	rows: {
		parent: "rows-2"
	},
	"scale-3-d": {
		parent: "scale-3d"
	},
	"school-2": {
		parent: "university"
	},
	"scissors-square": {
		parent: "square-scissors"
	},
	"scissors-square-dashed-bottom": {
		parent: "square-bottom-dashed-scissors"
	},
	"send-horizonal": {
		parent: "send-horizontal"
	},
	"shield-close": {
		parent: "shield-x"
	},
	sidebar: {
		parent: "panel-left"
	},
	"sidebar-close": {
		parent: "panel-left-close"
	},
	"sidebar-open": {
		parent: "panel-left-open"
	},
	"sigma-square": {
		parent: "square-sigma"
	},
	"slash-square": {
		parent: "square-slash"
	},
	sliders: {
		parent: "sliders-vertical"
	},
	"sort-asc": {
		parent: "arrow-up-narrow-wide"
	},
	"sort-desc": {
		parent: "arrow-down-wide-narrow"
	},
	"split-square-horizontal": {
		parent: "square-split-horizontal"
	},
	"split-square-vertical": {
		parent: "square-split-vertical"
	},
	"square-gantt": {
		parent: "square-chart-gantt"
	},
	"square-gantt-chart": {
		parent: "square-chart-gantt"
	},
	"square-kanban-dashed": {
		parent: "square-dashed-kanban"
	},
	stars: {
		parent: "sparkles"
	},
	"stop-circle": {
		parent: "circle-stop"
	},
	subtitles: {
		parent: "captions"
	},
	"terminal-square": {
		parent: "square-terminal"
	},
	"test-tube-2": {
		parent: "test-tube-diagonal"
	},
	"text-selection": {
		parent: "text-select"
	},
	train: {
		parent: "tram-front"
	},
	"tv-2": {
		parent: "tv-minimal"
	},
	unlock: {
		parent: "lock-open"
	},
	"unlock-keyhole": {
		parent: "lock-keyhole-open"
	},
	"upload-cloud": {
		parent: "cloud-upload"
	},
	"user-2": {
		parent: "user-round"
	},
	"user-check-2": {
		parent: "user-round-check"
	},
	"user-circle": {
		parent: "circle-user"
	},
	"user-circle-2": {
		parent: "circle-user-round"
	},
	"user-cog-2": {
		parent: "user-round-cog"
	},
	"user-minus-2": {
		parent: "user-round-minus"
	},
	"user-plus-2": {
		parent: "user-round-plus"
	},
	"user-square": {
		parent: "square-user"
	},
	"user-square-2": {
		parent: "square-user-round"
	},
	"user-x-2": {
		parent: "user-round-x"
	},
	"users-2": {
		parent: "users-round"
	},
	verified: {
		parent: "badge-check"
	},
	"wallet-2": {
		parent: "wallet-minimal"
	},
	"wand-2": {
		parent: "wand-sparkles"
	},
	"x-circle": {
		parent: "circle-x"
	},
	"x-octagon": {
		parent: "octagon-x"
	},
	"x-square": {
		parent: "square-x"
	}
};
var lastModified = 1737962193;
var width = 24;
var height = 24;
const icons$1 = {
	prefix: prefix,
	icons: icons,
	aliases: aliases,
	lastModified: lastModified,
	width: width,
	height: height
};

export { aliases, icons$1 as default, height, icons, lastModified, prefix, width };
//# sourceMappingURL=icons2.mjs.map
