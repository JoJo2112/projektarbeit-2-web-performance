# AudioTech: Fallstudie zur Web-Performance

Dieses Projekt wurde im Rahmen einer Fallstudie zum Thema Web-Performance und User Experience erstellt. Es dient als praktischer Demonstrator, um die Auswirkungen verschiedener Rendering- und Hydrierungsstrategien auf die Ladezeiten und die wahrgenommene Interaktivität von Webanwendungen zu analysieren.

Die Anwendung ist mit **Next.js (Version 15)**, **React (Version 19)** und **TypeScript** entwickelt und nutzt **Tailwind CSS** für das Styling.

## Projektübersicht

Das Kernstück dieses Projekts ist eine prototypische Produkt-Detailseite für einen fiktiven E-Commerce-Shop namens "AudioTech". Diese Seite wurde in vier unterschiedlichen technischen Varianten implementiert, um einen direkten Vergleich zu ermöglichen.

### Navigation

Von der Startseite der Anwendung aus kann direkt zu jeder der vier implementierten Varianten navigiert werden, um deren Ladeverhalten und Performance live zu testen und zu vergleichen.

## Technische Einrichtung

### Voraussetzungen

- Node.js (Version 20.x oder höher empfohlen)
- pnpm, npm oder yarn als Paketmanager

### Installation

1.  Klonen Sie das Repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigieren Sie in das Projektverzeichnis:
    ```bash
    cd projektarbeit-2-web-performance
    ```
3.  Installieren Sie die Abhängigkeiten:
    ```bash
    npm install
    ```

### Lokalen Entwicklungsserver starten

Um die Anwendung im Entwicklungsmodus zu starten (mit Turbopack für schnelle Ladezeiten), führen Sie folgenden Befehl aus:

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Anwendung zu sehen.

## Verwendete Technologien

- **Framework:** Next.js 15
- **Bibliothek:** React 19
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI-Komponenten:** shadcn/ui (basierend auf Radix UI)
- **Icons:** lucide-react
