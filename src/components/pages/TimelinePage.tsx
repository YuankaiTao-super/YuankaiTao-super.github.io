"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TimelinePageConfig } from '@/types/page';

export default function TimelinePage({ config, embedded = false }: { config: TimelinePageConfig; embedded?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className={embedded ? 'mb-4' : 'mb-8'}>
        <h1 className={`${embedded ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-primary mb-3`}>{config.title}</h1>
        {config.description && (
          <p className={`${embedded ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
            {config.description}
          </p>
        )}
      </div>

      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" aria-hidden />
        <div className="space-y-8">
          {config.items.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="relative"
            >
              <span className="absolute -left-[10px] top-4 h-4 w-4 rounded-full border-2 border-white dark:border-neutral-900 bg-accent shadow-sm" />

              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm p-5 md:p-6">
                <div className="flex items-start gap-4 mb-3">
                  {item.logo && (
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={item.logo}
                        alt={item.organization || item.title}
                        fill
                        className="object-contain p-3"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-primary leading-tight">{item.title}</h3>
                    {item.organization && (
                      <p className="text-sm font-medium text-accent mt-0.5">{item.organization}</p>
                    )}
                    {(item.date || item.location) && (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {[item.date, item.location].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                </div>

                {item.summary && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-3 leading-relaxed">{item.summary}</p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-400 mb-3">
                    {item.bullets.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}

                {item.supervisors && item.supervisors.length > 0 && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-3">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Supervisors: </span>
                    {item.supervisors.join('; ')}
                  </p>
                )}

                {(item.tags && item.tags.length > 0) || item.link ? (
                  <div className="flex flex-wrap gap-2">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                      >
                        View more
                      </a>
                    )}
                    {item.tags?.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
