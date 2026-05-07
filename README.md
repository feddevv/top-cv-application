# CV Builder

A simple React + Vite application for building a resume/CV in the browser. Fill out your personal details, education, and experience, then preview the generated PDF live and download it as `cv.pdf`.

## Features

- Live CV preview rendered with `@react-pdf/renderer`
- Instant PDF download link
- Accordion-based form for a focused editing flow
- Separate sections for general information, education, and work experience
- Clean component structure for inputs, labels, buttons, and PDF icons

## Tech Stack

- React 19
- Vite
- `@react-pdf/renderer` for PDF generation and preview
- `lucide-react` for interface icons
- ESLint for linting

## Getting Started

### Prerequisites

- Node.js 20 or newer is recommended
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## How It Works

The app keeps the CV form state in `src/layout/Main.jsx`. Each field updates the live preview immediately. The same data is passed into `src/components/CV.jsx`, which renders the PDF document and controls the download output.

The page is split into two main areas:

- The left side contains the editable form and the download action
- The right side shows a live PDF preview

## Project Structure

```text
src/
	App.jsx
	main.jsx
	components/
		Accordion.jsx
		Button.jsx
		CV.jsx
		Input.jsx
		Label.jsx
		icons/
			PDFIcons.jsx
	layout/
		Header.jsx
		Main.jsx
	styles/
		accordion.css
		button.css
		header.css
		index.css
		inputs.css
		labels.css
		main.css
```

## Notes

- The form is intentionally lightweight and does not include validation or persistence yet.
- The generated PDF currently covers the basic CV sections included in the form.
- You can extend the app by adding more accordion sections, extra CV fields, or export templates.

## License

No license has been specified for this project.
