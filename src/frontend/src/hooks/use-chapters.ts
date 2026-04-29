import type { Chapter } from "@/types/gita";
import { useQuery } from "@tanstack/react-query";

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    name: "Arjuna's Dilemma",
    sanskritName: "Arjuna Vishada Yoga",
    summary:
      "Arjuna surveys the battlefield of Kurukshetra and, overwhelmed by grief and moral confusion, lays down his bow — opening the dialogue that will transform his understanding.",
    verseCount: 47,
  },
  {
    id: 2,
    name: "The Eternal Self",
    sanskritName: "Sankhya Yoga",
    summary:
      "Krishna reveals the immortal nature of the soul, the folly of grief over the body, and introduces the path of selfless action as the foundation of true wisdom.",
    verseCount: 72,
  },
  {
    id: 3,
    name: "The Path of Action",
    sanskritName: "Karma Yoga",
    summary:
      "Krishna teaches that action performed without attachment, as an offering to the divine, purifies the soul and sustains the cosmic order.",
    verseCount: 43,
  },
  {
    id: 4,
    name: "Knowledge and Renunciation",
    sanskritName: "Jnana Karma Sanyasa Yoga",
    summary:
      "Krishna discloses the ancient lineage of this teaching and explains how divine knowledge burns away all karma, freeing the seeker.",
    verseCount: 42,
  },
  {
    id: 5,
    name: "The Yoga of Renunciation",
    sanskritName: "Karma Sanyasa Yoga",
    summary:
      "Both renunciation and active duty lead to liberation; the true renunciant acts in the world while remaining inwardly untouched.",
    verseCount: 29,
  },
  {
    id: 6,
    name: "The Path of Meditation",
    sanskritName: "Dhyana Yoga",
    summary:
      "Krishna details the practice of meditation — posture, breath, mind control — and the sublime peace experienced by one who has mastered the self.",
    verseCount: 47,
  },
  {
    id: 7,
    name: "Knowledge of the Absolute",
    sanskritName: "Jnana Vijnana Yoga",
    summary:
      "Krishna reveals his divine nature as the substratum of all existence and describes the four types of devotees who seek him.",
    verseCount: 30,
  },
  {
    id: 8,
    name: "The Imperishable Brahman",
    sanskritName: "Akshara Brahma Yoga",
    summary:
      "The path to the eternal — what one remembers at the moment of death determines one's destination; constant remembrance of Krishna leads to liberation.",
    verseCount: 28,
  },
  {
    id: 9,
    name: "The Royal Knowledge",
    sanskritName: "Raja Vidya Raja Guhya Yoga",
    summary:
      "Krishna discloses the most secret and royal knowledge: pure devotion to him, performed with love, dissolves all sin and leads directly to him.",
    verseCount: 34,
  },
  {
    id: 10,
    name: "Divine Manifestations",
    sanskritName: "Vibhuti Yoga",
    summary:
      "Krishna enumerates his infinite glories — from the sun to the ocean, from wisdom to silence — helping Arjuna see the divine in all creation.",
    verseCount: 42,
  },
  {
    id: 11,
    name: "The Universal Form",
    sanskritName: "Vishwarupa Darshana Yoga",
    summary:
      "Arjuna is granted divine sight and beholds Krishna's cosmic form — all beings, all time, all worlds contained within the Lord.",
    verseCount: 55,
  },
  {
    id: 12,
    name: "The Path of Devotion",
    sanskritName: "Bhakti Yoga",
    summary:
      "Devotion with personal love for Krishna is declared the highest and easiest path; Krishna describes the qualities of his dearest devotees.",
    verseCount: 20,
  },
  {
    id: 13,
    name: "The Field and the Knower",
    sanskritName: "Kshetra Kshetrajna Vibhaga Yoga",
    summary:
      "The body is the field, and the soul is the knower of the field; true knowledge is the discrimination between the perishable and the imperishable.",
    verseCount: 34,
  },
  {
    id: 14,
    name: "The Three Qualities",
    sanskritName: "Gunatraya Vibhaga Yoga",
    summary:
      "The three gunas — sattva, rajas, and tamas — bind the soul to nature. Transcending them through devotion leads to immortality.",
    verseCount: 27,
  },
  {
    id: 15,
    name: "The Supreme Person",
    sanskritName: "Purushottama Yoga",
    summary:
      "The cosmic Ashvattha tree, with roots above and branches below, symbolises creation; one who knows the Supreme Person beyond it attains liberation.",
    verseCount: 20,
  },
  {
    id: 16,
    name: "Divine and Demonic Natures",
    sanskritName: "Daivasura Sampad Vibhaga Yoga",
    summary:
      "Krishna distinguishes divine qualities — fearlessness, purity, compassion — from demonic ones, and urges following scripture over ego.",
    verseCount: 24,
  },
  {
    id: 17,
    name: "The Three Kinds of Faith",
    sanskritName: "Shraddhatraya Vibhaga Yoga",
    summary:
      "Faith, food, worship, and charity are each coloured by the three gunas; actions performed without faith bring no fruit here or hereafter.",
    verseCount: 28,
  },
  {
    id: 18,
    name: "Liberation Through Renunciation",
    sanskritName: "Moksha Sanyasa Yoga",
    summary:
      "The final and most comprehensive chapter: renouncing the fruits of all action and surrendering completely to Krishna is the highest teaching — the gateway to eternal peace.",
    verseCount: 78,
  },
];

export function useChapters() {
  return useQuery<Chapter[]>({
    queryKey: ["chapters"],
    queryFn: async () => CHAPTERS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}
