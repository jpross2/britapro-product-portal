/* Part images for the Product Portal locator. Sources mirror Ordering Portal photoMarkup(). */
(() => {
  const photos = {
  "BPV319101": "https://www.gapswater.co.uk/cdn/shop/files/ClackV3191-01-2.jpg?crop=center&height=1200&v=1763656914&width=1200",
  "BPH4615": "https://cdn11.bigcommerce.com/s-zo9s1d/images/stencil/1280x1280/products/2993/5984/CV-4615__47232.1744224773.jpg?c=2%3Fimbypass%3Don",
  "BPV3194": "https://www.isopurewater.com/cdn/shop/files/product-7654824542379-padded_1024x.jpg?v=1777259608",
  "BPV3331": "https://www.softenerparts.com/assets/images/V3331.jpg",
  "BPV3192": "https://www.aquatell.ca/cdn/shop/files/DrainNutandInsert_600x.png?v=1750350427",
  "BPV3158": "https://i.ebayimg.com/images/g/PmMAAeSwxxBpSC0e/s-l1600.jpg",
  "BPV3162017": "https://watersoftener-parts.com/images/V3162-017-2.jpg",
  "BPV3162027": "https://watersoftener-parts.com/bmz_cache/c/cl-washer07-27jpg.image.550x550.jpg",
  "BPV3159": "https://www.gapswater.co.uk/cdn/shop/files/v3159-2.jpg?crop=center&height=1200&v=1763652904&width=1200",
  "BPV3105": "https://www.aquatell.ca/cdn/shop/files/ClackO-ring.png?v=1756235584&width=1200",
  "BPV3174": "https://www.reverseosmosis.com/cdn/shop/files/s-l1600.jpg?v=1688006391",
  "BPV3163": "https://softis.ua/image/catalog/imported/v3163-kilceuschilnjujucheclack_o-ring019_-800x800.png",
  "BPV3003": "https://www.puredirectusa.com/cdn/shop/files/V3003.1_1200x1200.jpg?v=1777791627",
  "BPV3011": "https://www.gapswater.co.uk/cdn/shop/files/v30111_7174fa64-00fb-4316-9624-91bd33b63b71.jpg?crop=center&height=1200&v=1747324074&width=1200",
  "BPV3005": "https://www.isopurewater.com/cdn/shop/files/Screenshot_2025-10-07_094936_1200x1200.png?v=1759855851",
  "BPV3004": "https://www.softenerparts.com/assets/images/photos/V3004-4.jpg",
  "BPV3150": "https://www.aquatell.ca/cdn/shop/files/ClackV3150SplitRingRetainer_5000x.png?v=1756130433",
  "BPV30101F": "https://cdn11.bigcommerce.com/s-zo9s1d/images/stencil/1280x1280/products/2972/5959/CP-CV30101F-blue__75807.1741368853.jpg?c=2",
  "BPV300715": "https://oasish2o.ca/cdn/shop/files/Clack3_4_JG90Elbow_V3007-15.png?v=1775586422&width=3840",
  "BPV300712": "https://oasish2o.ca/cdn/shop/files/34SharkBiteAssembly_V3007-12LF.png?v=1775663601&width=3840",
  "BPV300703": "https://affordablewater.us/cdn/shop/files/ProductImagesSquare-2025-04-22T132130.398.png?v=1745342677&width=800",
  "BPV300713": "https://www.softenerparts.com/assets/images/photos/V3007-13LF-5.jpg",
  "BPV300702": "https://www.puredirectusa.com/cdn/shop/files/V3007-02LF_1200x1200.jpg?v=1772756414",
  "BPV3007": "https://www.puredirectusa.com/cdn/shop/files/V3007_700x700.jpg?v=1772175333",
  "BPV300717": "https://www.freshwatersystems.com/cdn/shop/files/r3nzc063rjvgwjoi2j2j_1024x1024.jpg?v=1705478168"
};
  const localOrderPhotos = new Set(["BP2000","BPKATAIR1J","BPKATAIR2"]);
  const orderBase = 'https://britapro-order-portal.netlify.app/';
  window.BRITAPRO_PART_LOCATOR_IMAGES = { photos, localOrderPhotos: [...localOrderPhotos], locatorSkus: ["BPV3151","BPV3150","BPV3105","BP2000","BPV3176","BPV3152","BPV317701","BPV30101Z","BPV30101C","BPV30101F","BPV3010-H","BPV30101H","BPKATAIR1J","BPKATAIR2","BPKATAIR3","BPV3170","BPV3171","BPVLVCOVER","BPV310701","BPV310601","BPV4478LR","V3186-06","BPH4615","BPV300802","BPV3166","BPV3167","BPV3163","PV3190150","BPV3190090","BPV3190100","BPV3190110","BPV3190130","BPV3190170","BPV3190-00","BPV3190-50","BPV3194","BPV3192","BPV3158","BPV3159","BPV3162007","BPV3162010","BPV3162013","BPV3162017","BPV3162022","BPV3162027","BPV3162032","BPV3162042","BPV3162053","BPV3162065","BPV3162075","BPV3162090","BPV3162100","BPV3331","BPV3003","BPV311801","BPV3195","BPV3007","BPV319101","BPV300701","BPV300702","BPV300703","BPV300704","BPV300705","BPV300707","BPV300709","BPV300712","BPV300713","BPV300715","BPV300717","BPV3005","BPV3004","BPV3178LP","BPV3178C","BPV3011","BPV3174","BPV3135","BPV3180","BPV3001"], orderBase };
  const selected = document.getElementById('selected');
  if (!selected) return;
  const style = document.createElement('style');
  style.textContent = '.parts-locator-photo-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:12px}.parts-locator-photo{min-width:0;border:1px solid #dce5ed;border-radius:10px;background:#fff;padding:8px;text-align:center}.parts-locator-photo img{display:block;width:100%;height:135px;object-fit:contain}.parts-locator-photo figcaption{font-size:12px;color:#60758a;margin-top:5px}.parts-locator-photo .missing{min-height:135px;display:grid;place-items:center;color:#879baa;font-size:13px;padding:8px}';
  document.head.append(style);
  let lastKey = '';
  const render = () => {
    const links = [...selected.querySelectorAll('a[href]')];
    let skus = links.map(link => { try { return new URL(link.href).searchParams.get('sku'); } catch { return null; } }).filter(Boolean);
    skus = [...new Set(skus.map(sku => sku.trim().toUpperCase()))];
    if (!skus.length) {
      const match = (selected.textContent || '').match(/\b(?:BP[A-Z0-9]+(?:-[A-Z0-9]+)?|PV\d{4,}|V\d{4,}(?:-\d+)?)\b/);
      if (match) skus = [match[0].toUpperCase()];
    }
    const key = skus.join('|');
    if (key === lastKey) return;
    lastKey = key;
    selected.querySelector('.parts-locator-photo-list')?.remove();
    if (!skus.length) return;
    const list = document.createElement('div');
    list.className = 'parts-locator-photo-list';
    list.setAttribute('aria-label','Part images');
    for (const sku of skus) {
      const figure = document.createElement('figure');
      figure.className = 'parts-locator-photo';
      const caption = document.createElement('figcaption');
      caption.textContent = sku;
      const src = photos[sku] || (localOrderPhotos.has(sku) ? orderBase + encodeURIComponent(sku) + '.webp' : '');
      if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Ordering Portal product photo for ' + sku;
        img.loading = 'lazy';
        img.onerror = () => {
          img.remove();
          const missing = document.createElement('div');
          missing.className = 'missing';
          missing.textContent = 'Image unavailable';
          figure.insertBefore(missing, caption);
        };
        figure.append(img);
      } else {
        const missing = document.createElement('div');
        missing.className = 'missing';
        missing.textContent = 'Product photo needed for ' + sku;
        figure.append(missing);
      }
      figure.append(caption);
      list.append(figure);
    }
    selected.append(list);
  };
  const observer = new MutationObserver(() => queueMicrotask(render));
  observer.observe(selected,{childList:true,subtree:true});
  render();
})();
