'use client';
import React from "react";
import {useEffect} from "react";
import "./be-style.css";
import {useLocale} from "next-intl";

export default function BeSearchForm({ extraClass }: { extraClass?: string }) {
  const locale = useLocale();
  const searchForm = (w: any) => {
    // @ts-ignore
    !function(e,n){
      // @ts-ignore
      var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
      // @ts-ignore
      if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
        // @ts-ignore
        !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
            // @ts-ignore
            a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
            ["uz-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
    }(window, [
      ["setContext", "BE-INT-fergana-hotel_2026-07-27", locale],
      ["embed", "search-form", {
        container: "be-search-form"
      }]
    ]);
  };

  useEffect(() => {
    searchForm(window);
  }, [locale]);

  useEffect(() => {
    const blockSearch = document.querySelector('#block-search') as HTMLElement | null;
    if (!blockSearch) return;

    const NAVBAR_HEIGHT = 80; // the fixed navbar the bar docks beneath
    const MIN_WIDTH = 1200;   // below this the bar stays in normal flow

    // Stands in for the block while it is lifted out into position: fixed.
    // It mirrors the block's box exactly - height plus both margins - rather
    // than a single computed height, because on the homepage the block's
    // negative top margin makes its net flow contribution negative, and a
    // negative height is silently ignored by the browser.
    const placeholder = document.createElement('div');
    placeholder.setAttribute('aria-hidden', 'true');
    blockSearch.parentNode?.insertBefore(placeholder, blockSearch);

    const releasePlaceholder = () => {
      placeholder.style.height = '0px';
      placeholder.style.marginTop = '0px';
      placeholder.style.marginBottom = '0px';
    };
    releasePlaceholder();

    let dockAt = Number.POSITIVE_INFINITY;
    let box = { height: 0, marginTop: '0px', marginBottom: '0px' };

    // Only meaningful while the block is still in normal flow.
    const measure = () => {
      const styles = window.getComputedStyle(blockSearch);
      const rect = blockSearch.getBoundingClientRect();
      // Dock exactly as the block's top meets the underside of the navbar,
      // which is where the fixed style renders it, so nothing moves on switch.
      dockAt = rect.top + window.scrollY - NAVBAR_HEIGHT;
      box = {
        height: rect.height,
        marginTop: styles.marginTop,
        marginBottom: styles.marginBottom,
      };
    };

    const update = () => {
      const isFixed = blockSearch.classList.contains('block-search--fixed');
      // Measuring while fixed would read the fixed geometry and give a
      // different threshold than the one used to dock, which flickers the bar
      // on and off. Freeze it for as long as the bar is docked.
      if (!isFixed) measure();

      const shouldFix = window.innerWidth >= MIN_WIDTH && window.scrollY >= dockAt;

      if (shouldFix && !isFixed) {
        placeholder.style.height = `${box.height}px`;
        placeholder.style.marginTop = box.marginTop;
        placeholder.style.marginBottom = box.marginBottom;
        blockSearch.classList.add('block-search--fixed');
      } else if (!shouldFix && isFixed) {
        blockSearch.classList.remove('block-search--fixed');
        releasePlaceholder();
      }
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // The booking widget loads asynchronously and changes the block's height,
    // which would otherwise leave a stale measurement behind.
    const observer = new ResizeObserver(onScroll);
    observer.observe(blockSearch);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      placeholder.remove();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
      <div id="block-search" className={`block-search ${extraClass || ""}`}>
        <div id="be-search-form" className="be-container">
          <div className="flex items-center justify-center py-5">
            <div className="w-7 h-7 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
          </div>
          <a href="https://exely.com/" rel="nofollow" target="_blank" className="sr-only">Hotel management software</a>
        </div>
      </div>
  )
}