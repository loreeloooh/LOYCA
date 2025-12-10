import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta absoluta al archivo de salida
const outputPath = resolve(__dirname, '../public/sitemap.xml');
const writeStream = createWriteStream(outputPath);

const sitemap = new SitemapStream({
  hostname: 'https://loyca.com.ar'
});

// Configurar los listeners ANTES de pipe
const stream = sitemap
  .pipe(writeStream)
  .on('finish', () => {
    console.log(`✅ Sitemap generado correctamente en: ${outputPath}`);
  })
  .on('error', (err) => {
    console.error('❌ Error al generar el sitemap:', err);
  });

// Añade tus rutas
sitemap.write({ 
  url: '/', 
  changefreq: 'daily', 
  priority: 1.0 
});

sitemap.write({ 
  url: '/enlaces', 
  changefreq: 'weekly', 
  priority: 0.8 
});

sitemap.end();
```__