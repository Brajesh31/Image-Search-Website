(() => {
  "use strict";

  const config = window.IMAGE_SEARCH_CONFIG || {};
  const accessKey = typeof config.unsplashAccessKey === "string"
    ? config.unsplashAccessKey.trim()
    : "";

  const form = document.querySelector(".search-box");
  const input = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const results = document.querySelector(".search-results");
  const showMoreButton = document.getElementById("show-more-button");
  const status = document.getElementById("search-status");

  if (!form || !input || !searchButton || !results || !showMoreButton || !status) {
    console.error("Image search cannot start because required page elements are missing.");
    return;
  }

  const perPage = 12;
  let currentQuery = "";
  let currentPage = 1;
  let totalPages = 0;
  let isLoading = false;
  let activeRequest = null;

  function setStatus(message, state = "info") {
    status.textContent = message;
    status.dataset.state = state;
  }

  function setLoading(loading) {
    isLoading = loading;
    searchButton.disabled = loading;
    showMoreButton.disabled = loading;
    searchButton.textContent = loading && currentPage === 1 ? "Searching…" : "Search";
    showMoreButton.textContent = loading ? "Loading…" : "Show More";
    form.setAttribute("aria-busy", String(loading));
  }

  function buildUnsplashLink(url) {
    const link = new URL(url);
    link.searchParams.set("utm_source", "PicKart");
    link.searchParams.set("utm_medium", "referral");
    return link.toString();
  }

  function createResultCard(photo) {
    const card = document.createElement("article");
    card.className = "search-result";

    const imageLink = document.createElement("a");
    imageLink.href = photo.links.html;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";
    imageLink.className = "image-link";
    imageLink.setAttribute("aria-label", "Open image on Unsplash");

    const image = document.createElement("img");
    image.src = photo.urls.small;
    image.alt = photo.alt_description || photo.description || "Image from Unsplash";
    image.loading = "lazy";
    image.decoding = "async";
    imageLink.appendChild(image);

    const details = document.createElement("div");
    details.className = "image-details";

    const description = document.createElement("p");
    description.className = "image-description";
    description.textContent = photo.alt_description || photo.description || "Untitled image";

    const photographer = document.createElement("a");
    photographer.href = buildUnsplashLink(photo.user.links.html);
    photographer.target = "_blank";
    photographer.rel = "noopener noreferrer";
    photographer.textContent = `Photo by ${photo.user.name || "Unknown photographer"} on Unsplash`;

    details.append(description, photographer);
    card.append(imageLink, details);
    return card;
  }

  function renderResults(photos) {
    const fragment = document.createDocumentFragment();
    photos.forEach((photo) => {
      if (photo && photo.urls && photo.urls.small && photo.links && photo.links.html) {
        fragment.appendChild(createResultCard(photo));
      }
    });
    results.appendChild(fragment);
  }

  async function searchImages({ append = false } = {}) {
    if (isLoading) return;

    const query = input.value.trim();
    if (!query) {
      input.focus();
      setStatus("Enter a word or phrase to search for images.", "error");
      return;
    }

    if (!accessKey) {
      setStatus(
        "Image search is not configured. Add your Unsplash Access Key to config.example.js for local testing, or connect a server-side API proxy for production.",
        "error"
      );
      return;
    }

    if (!append || query !== currentQuery) {
      currentQuery = query;
      currentPage = 1;
      totalPages = 0;
      results.replaceChildren();
      showMoreButton.hidden = true;
    }

    if (append && currentPage > totalPages) return;

    if (activeRequest) activeRequest.abort();
    activeRequest = new AbortController();
    const requestedPage = currentPage;

    setLoading(true);
    setStatus(append ? "Loading more images…" : `Searching Unsplash for “${query}”…`);

    try {
      const endpoint = new URL("https://api.unsplash.com/search/photos");
      endpoint.search = new URLSearchParams({
        query: currentQuery,
        page: String(requestedPage),
        per_page: String(perPage),
        client_id: accessKey
      }).toString();

      const response = await fetch(endpoint, {
        headers: { Accept: "application/json" },
        signal: activeRequest.signal
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("Unsplash rejected the access key. Check the key and its application permissions.");
        }
        if (response.status === 429) {
          throw new Error("Unsplash rate limit reached. Wait before searching again.");
        }
        throw new Error(`Unsplash request failed with HTTP ${response.status}.`);
      }

      const data = await response.json();
      if (!Array.isArray(data.results)) {
        throw new Error("Unsplash returned an unexpected response. Please try again.");
      }

      totalPages = Number.isFinite(data.total_pages) ? data.total_pages : 0;
      renderResults(data.results);
      currentPage = requestedPage + 1;

      if (data.results.length === 0 && requestedPage === 1) {
        setStatus(`No images found for “${currentQuery}”. Try a different search phrase.`, "empty");
      } else {
        const count = Number.isFinite(data.total) ? data.total : data.results.length;
        setStatus(`Showing page ${requestedPage} for “${currentQuery}”. ${count.toLocaleString()} results available.`);
      }

      showMoreButton.hidden = currentPage > totalPages || data.results.length === 0;
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("Image search failed:", error);
      setStatus(error.message || "Something went wrong while searching. Please try again.", "error");
      if (!append) results.replaceChildren();
    } finally {
      setLoading(false);
      activeRequest = null;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    searchImages();
  });

  showMoreButton.addEventListener("click", () => {
    searchImages({ append: true });
  });

  setStatus("Search for a topic to discover photos from Unsplash.");
})();
