import Types "../types/bhavishya";
import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

/// Domain logic for Bhavishya Gathan — Western mode (Tarot reading).
/// Vedic astrology (Jyotish) is covered by the kundali-graha and user-profile
/// domains. This domain adds the Western mode: tarot reading.
/// All functions are stateless — state is injected by main.mo via mixins.
module {

  // ─── Spread definitions ────────────────────────────────────────────────────
  // Each spread defines the number of cards and the position names.
  type SpreadDef = {
    cardCount : Nat;
    positions : [Text];
  };

  func getSpread(spreadType : Text) : SpreadDef {
    switch (spreadType) {
      case "three-card" { { cardCount = 3; positions = ["Past", "Present", "Future"] } };
      case "single" { { cardCount = 1; positions = ["The Card"] } };
      case "five-card" { { cardCount = 5; positions = ["Present", "Past", "Future", "Underlying", "Outcome"] } };
      case "celtic-cross" { { cardCount = 10; positions = ["Present", "Challenge", "Past", "Future", "Above", "Below", "Advice", "External Influences", "Hopes and Fears", "Outcome"] } };
      case _ { { cardCount = 3; positions = ["Past", "Present", "Future"] } };
    }
  };

  /// Return all tarot cards as an array.
  public func listTarotCards(
    cards : Map.Map<Text, Types.TarotCard>,
  ) : [Types.TarotCard] {
    cards.values().toArray()
  };

  /// Return a single tarot card by its id.
  public func getTarotCard(
    cards : Map.Map<Text, Types.TarotCard>,
    id : Text,
  ) : ?Types.TarotCard {
    cards.get(id)
  };

  /// Seed the 22 Major Arcana tarot cards (Fool through World).
  public func initTarotCards(cards : Map.Map<Text, Types.TarotCard>) : () {
    cards.add("major-0-fool", {
      id = "major-0-fool"; name = "The Fool"; arcana = "Major"; suit = "Major"; number = 0;
      uprightMeaning = "New beginnings, innocence, spontaneity, a free spirit. The Fool represents the start of a journey, taking a leap of faith, and embracing the unknown with childlike wonder. A time of unlimited potential.";
      reversedMeaning = "Recklessness, risk-taking, naivety. The reversed Fool warns against acting without thinking, foolish decisions, or being overly trusting. A need for caution and grounding.";
      symbolism = "The Fool symbolizes the soul at the beginning of its journey, carrying only a small bag of experience. The dog represents instinct, the cliff represents the leap of faith, and the white rose represents purity of intention.";
      imagery = "A young traveler stands at the edge of a cliff, looking upward with a small bag on a stick over his shoulder. A small white dog dances at his heels. The sun shines brightly behind him, suggesting divine protection.";
    });
    cards.add("major-1-magician", {
      id = "major-1-magician"; name = "The Magician"; arcana = "Major"; suit = "Major"; number = 1;
      uprightMeaning = "Manifestation, willpower, skill, resourcefulness. The Magician represents the power to create and transform, using all available tools. A time of focused intention and the ability to make things happen.";
      reversedMeaning = "Manipulation, untapped talents, misuse of power. The reversed Magician warns against deception, trickery, or failing to use one's full potential. A need for integrity and authentic expression.";
      symbolism = "The Magician represents the bridge between heaven and earth, with one hand raised and one pointing down ('as above, so below'). The four suits on the table represent mastery over all elements. The infinity symbol represents limitless power.";
      imagery = "A figure stands before a table bearing a cup, sword, wand, and pentacle. He raises a wand in his right hand and points to the earth with his left. Above his head floats the infinity symbol. A garden of roses and lilies surrounds him.";
    });
    cards.add("major-2-high-priestess", {
      id = "major-2-high-priestess"; name = "The High Priestess"; arcana = "Major"; suit = "Major"; number = 2;
      uprightMeaning = "Intuition, mystery, subconscious mind, inner wisdom. The High Priestess represents the power of the feminine, the unseen, and the wisdom that comes from within. A time to listen to your inner voice.";
      reversedMeaning = "Secrets, disconnection from intuition, hidden agendas. The reversed High Priestess warns against ignoring your inner voice, repressed intuition, or withheld information. A need to trust your instincts.";
      symbolism = "The High Priestess represents the veil between the conscious and unconscious. The pillars represent duality (light and dark, masculine and feminine). The scroll represents hidden knowledge, and the moon represents the subconscious.";
      imagery = "A serene woman sits between two pillars — one dark, one light. She wears a crown with a crescent moon and holds a scroll marked 'TORA'. At her feet, a crescent moon. Behind her, a tapestry of pomegranates and palms.";
    });
    cards.add("major-3-empress", {
      id = "major-3-empress"; name = "The Empress"; arcana = "Major"; suit = "Major"; number = 3;
      uprightMeaning = "Abundance, nurturing, fertility, nature, motherhood. The Empress represents creation, growth, and the nurturing of life. A time of abundance, creativity, and connection to the natural world.";
      reversedMeaning = "Dependence, smothering, creative block, neglect of self. The reversed Empress warns against over-dependence on others, neglecting self-care, or blocked creativity. A need for independence and self-nurturing.";
      symbolism = "The Empress represents the archetype of the Mother — Demeter, the Earth Goddess. The wheat represents harvest and abundance. The crown of stars represents divine authority. The heart-shaped shield with the Venus symbol represents love and beauty.";
      imagery = "A woman in a flowing robe sits on a throne in a lush garden. She wears a crown of twelve stars. Wheat grows at her feet, and a forest surrounds her. A heart-shaped shield with the Venus symbol rests nearby.";
    });
    cards.add("major-4-emperor", {
      id = "major-4-emperor"; name = "The Emperor"; arcana = "Major"; suit = "Major"; number = 4;
      uprightMeaning = "Authority, structure, control, fatherhood, leadership. The Emperor represents the power to organize, build, and lead. A time of stability, discipline, and the establishment of order.";
      reversedMeaning = "Domination, rigidity, inflexibility, abuse of power. The reversed Emperor warns against being too controlling, rigid, or authoritarian. A need for flexibility and compassion in leadership.";
      symbolism = "The Emperor represents the archetype of the Father — the ruler, the lawgiver. The ram's horns represent Aries and leadership. The armor under his robe represents protection. The ankh represents life, and the orb represents dominion.";
      imagery = "A bearded man sits on a stone throne adorned with ram's heads. He wears armor under his robe and holds an ankh and an orb. A barren, mountainous landscape stretches behind him.";
    });
    cards.add("major-5-hierophant", {
      id = "major-5-hierophant"; name = "The Hierophant"; arcana = "Major"; suit = "Major"; number = 5;
      uprightMeaning = "Tradition, spiritual wisdom, religious guidance, conformity. The Hierophant represents established religion, tradition, and the search for meaning through accepted paths. A time of learning from a teacher or tradition.";
      reversedMeaning = "Rebellion, unconventional beliefs, freedom from tradition. The reversed Hierophant suggests breaking from tradition, questioning authority, or finding your own spiritual path. A time of personal spiritual exploration.";
      symbolism = "The Hierophant represents the Pope, the spiritual authority, the keeper of tradition. The triple crown represents the three worlds. The crossed keys represent the keys to heaven. The two acolytes represent the transmission of knowledge.";
      imagery = "A figure in papal vestments sits between two pillars. He wears a triple crown and holds a staff. Two acolytes kneel before him. The crossed keys of heaven rest at his feet.";
    });
    cards.add("major-6-lovers", {
      id = "major-6-lovers"; name = "The Lovers"; arcana = "Major"; suit = "Major"; number = 6;
      uprightMeaning = "Love, harmony, choices, partnerships, alignment of values. The Lovers represent union, partnership, and the choices of the heart. A time of important decisions, especially in relationships.";
      reversedMeaning = "Disharmony, imbalance, misalignment of values, difficult choices. The reversed Lovers warns against conflict in relationships, poor choices, or being out of alignment with your values. A need for honest communication.";
      symbolism = "The Lovers represent the union of opposites — masculine and feminine, conscious and unconscious. The angel represents divine blessing. The sun represents illumination. The tree of knowledge and the serpent represent choice and temptation.";
      imagery = "A man and woman stand beneath an angel with outspread wings. The sun shines behind the angel. Behind the man is a tree of flames; behind the woman, a tree with a serpent. Mountains rise in the distance.";
    });
    cards.add("major-7-chariot", {
      id = "major-7-chariot"; name = "The Chariot"; arcana = "Major"; suit = "Major"; number = 7;
      uprightMeaning = "Determination, willpower, victory, control, success through discipline. The Chariot represents the power to overcome obstacles through focused will. A time of triumph, achievement, and forward momentum.";
      reversedMeaning = "Lack of direction, aggression, scattered energy, defeat. The reversed Chariot warns against losing control, being pulled in different directions, or failing to focus. A need to regain direction and discipline.";
      symbolism = "The Chariot represents the soul's journey, driven by the will. The two sphinxes represent the opposing forces that must be mastered. The canopy of stars represents divine protection. The city behind represents what has been left behind.";
      imagery = "A warrior stands in a chariot, holding a wand or scepter. Two sphinxes — one black, one white — pull the chariot. He wears a crown and armor decorated with crescent moons. A city skyline is behind him.";
    });
    cards.add("major-8-strength", {
      id = "major-8-strength"; name = "Strength"; arcana = "Major"; suit = "Major"; number = 8;
      uprightMeaning = "Inner strength, courage, patience, compassion, gentle power. Strength represents the power of the soul to master the animal nature through love, not force. A time of quiet courage and self-mastery.";
      reversedMeaning = "Self-doubt, weakness, raw emotion, lack of self-control. The reversed Strength warns against giving in to base instincts, lacking confidence, or being overwhelmed by emotion. A need to find inner courage.";
      symbolism = "Strength represents the mastery of the lower self by the higher self. The woman represents the soul; the lion represents the animal nature. The infinity symbol represents limitless spiritual power. The garland represents the union of opposites.";
      imagery = "A woman in a flowing white robe gently opens the mouth of a lion. Above her head floats the infinity symbol. She wears a garland of flowers, and the lion is calm under her touch. Mountains rise in the distance.";
    });
    cards.add("major-9-hermit", {
      id = "major-9-hermit"; name = "The Hermit"; arcana = "Major"; suit = "Major"; number = 9;
      uprightMeaning = "Introspection, solitude, inner guidance, soul-searching, wisdom. The Hermit represents the search for inner truth, away from the distractions of the world. A time of contemplation and spiritual seeking.";
      reversedMeaning = "Isolation, loneliness, withdrawal, alienation. The reversed Hermit warns against excessive isolation, cutting yourself off from others, or losing yourself in solitude. A need to reconnect with the world.";
      symbolism = "The Hermit represents the wise seeker, the inner guide. The lantern represents inner light and wisdom. The staff represents the path and support. The gray cloak represents humility and the wisdom of age.";
      imagery = "An old man in a gray cloak stands on a snowy peak. He holds a lantern with a six-pointed star inside. In his other hand, a staff. He looks downward, deep in contemplation.";
    });
    cards.add("major-10-wheel-of-fortune", {
      id = "major-10-wheel-of-fortune"; name = "Wheel of Fortune"; arcana = "Major"; suit = "Major"; number = 10;
      uprightMeaning = "Cycles, destiny, change, turning point, luck. The Wheel of Fortune represents the ever-turning cycle of life, fate, and the inevitability of change. A time of shifting fortune and karmic turning points.";
      reversedMeaning = "Bad luck, resistance to change, setbacks, feeling out of control. The reversed Wheel warns against resisting necessary change, feeling victimized by fate, or being stuck in a negative cycle. A need to accept and adapt.";
      symbolism = "The Wheel represents the cycle of life, death, and rebirth — the karmic wheel. The four creatures represent the fixed signs of the zodiac. The sphinx represents the riddle of existence. The snake represents the descent of the soul into matter.";
      imagery = "A great wheel turns in the center, inscribed with letters and symbols. Four winged creatures — a man, lion, ox, and eagle — read books at the corners. A sphinx sits atop the wheel; a snake-like creature descends on the left.";
    });
    cards.add("major-11-justice", {
      id = "major-11-justice"; name = "Justice"; arcana = "Major"; suit = "Major"; number = 11;
      uprightMeaning = "Fairness, truth, cause and effect, law, balance. Justice represents the principle of karma — that every action has consequences. A time of truth, fairness, and the resolution of past actions.";
      reversedMeaning = "Unfairness, dishonesty, imbalance, lack of accountability. The reversed Justice warns against injustice, dishonesty, or avoiding responsibility. A need to face the truth and restore balance.";
      symbolism = "Justice represents cosmic law and karma. The scales represent balance and the weighing of actions. The sword represents truth and the cutting away of illusion. The crown represents divine authority. The veil represents the hidden workings of justice.";
      imagery = "A figure sits on a throne between two pillars, holding a sword in one hand and scales in the other. She wears a crown and a red robe. A veil hangs behind her, suggesting the hidden nature of justice.";
    });
    cards.add("major-12-hanged-man", {
      id = "major-12-hanged-man"; name = "The Hanged Man"; arcana = "Major"; suit = "Major"; number = 12;
      uprightMeaning = "Surrender, sacrifice, new perspective, letting go, pause. The Hanged Man represents the wisdom of surrender, seeing things from a new angle, and the sacrifice that leads to transformation. A time of voluntary pause and reflection.";
      reversedMeaning = "Stalling, resistance, indecision, delay. The reversed Hanged Man warns against resisting necessary sacrifice, being stuck, or refusing to see a new perspective. A need to let go and surrender.";
      symbolism = "The Hanged Man represents the sacrifice of the ego for higher wisdom. The upside-down position represents a new perspective. The halo represents enlightenment through surrender. The tree represents the World Tree, the axis of the world.";
      imagery = "A man hangs upside down from a tree, suspended by one foot. His other leg is crossed behind, forming a figure-4. His face is serene, with a halo around his head. His hands are behind his back.";
    });
    cards.add("major-13-death", {
      id = "major-13-death"; name = "Death"; arcana = "Major"; suit = "Major"; number = 13;
      uprightMeaning = "Endings, transformation, transition, letting go of the old. Death represents not physical death but the end of a cycle and the beginning of a new one. A time of profound transformation and the release of what no longer serves.";
      reversedMeaning = "Resistance to change, inability to move on, stagnation. The reversed Death warns against resisting necessary endings, clinging to the past, or fearing change. A need to embrace transformation.";
      symbolism = "Death represents the transformative power of endings. The skeleton represents the impermanence of the body. The rising sun represents rebirth. The bishop represents the inevitability of death for all. The river represents the flow of life and the passage to the next world.";
      imagery = "A skeleton in black armor rides a white horse. He carries a black banner with a white rose. A bishop pleads before him. In the background, a river flows, and the sun rises between two towers.";
    });
    cards.add("major-14-temperance", {
      id = "major-14-temperance"; name = "Temperance"; arcana = "Major"; suit = "Major"; number = 14;
      uprightMeaning = "Balance, moderation, patience, blending, harmony. Temperance represents the alchemical blending of opposites, the middle path, and the art of balance. A time of healing, integration, and patient progress.";
      reversedMeaning = "Imbalance, excess, lack of harmony, impatience. The reversed Temperance warns against extremes, overindulgence, or rushing. A need to restore balance and practice moderation.";
      symbolism = "Temperance represents the alchemist, blending fire and water, spirit and matter. The angel represents the guardian of balance. The two cups represent the blending of opposites. The iris represents the bridge between heaven and earth. The path to the sun represents the journey to enlightenment.";
      imagery = "An angel with wings stands with one foot on land, one in water. She pours liquid between two cups. On her robe is a triangle within a square. In the background, a path leads to a mountain with a glowing crown.";
    });
    cards.add("major-15-devil", {
      id = "major-15-devil"; name = "The Devil"; arcana = "Major"; suit = "Major"; number = 15;
      uprightMeaning = "Bondage, attachment, materialism, shadow self, temptation. The Devil represents the chains we forge for ourselves — addiction, materialism, and the shadow side of our nature. A time to confront what binds you.";
      reversedMeaning = "Release, freedom, reclaiming power, awareness of bondage. The reversed Devil represents breaking free from chains, releasing attachments, and reclaiming your power. A time of liberation from what held you back.";
      symbolism = "The Devil represents the shadow self, the lower nature, and the illusions that bind us. The inverted pentagram represents the inversion of spiritual values. The chains represent attachment, but they are loose — the bondage is self-imposed. The horned figure represents the animal nature.";
      imagery = "A horned, winged figure sits on a pedestal. Two naked figures, a man and a woman, are chained to the pedestal. The chains are loose. An inverted pentagram is above the Devil's head. He holds a torch.";
    });
    cards.add("major-16-tower", {
      id = "major-16-tower"; name = "The Tower"; arcana = "Major"; suit = "Major"; number = 16;
      uprightMeaning = "Sudden change, upheaval, revelation, awakening, destruction of the false. The Tower represents the sudden collapse of false structures — beliefs, relationships, or situations built on shaky foundations. A time of shocking but necessary change.";
      reversedMeaning = "Avoidance of disaster, fear of change, delaying the inevitable. The reversed Tower warns against resisting necessary change, avoiding the truth, or trying to maintain a false structure. A need to face the upheaval.";
      symbolism = "The Tower represents the destruction of the ego and false structures. The lightning represents divine intervention. The falling figures represent the collapse of the old self. The crown represents the fall of false authority. The 22 dots represent the 22 letters of the Hebrew alphabet, the building blocks of creation.";
      imagery = "A tall tower on a rocky crag is struck by lightning. The crown on top is blown off. Two figures fall from the tower. Fire and debris fill the scene. The sky is dark with clouds.";
    });
    cards.add("major-17-star", {
      id = "major-17-star"; name = "The Star"; arcana = "Major"; suit = "Major"; number = 17;
      uprightMeaning = "Hope, faith, renewal, inspiration, serenity. The Star represents hope after darkness, the guiding light, and the renewal of spirit. A time of healing, inspiration, and connection to the divine.";
      reversedMeaning = "Despair, lack of faith, discouragement, disconnection. The reversed Star warns against losing hope, feeling disconnected from the divine, or being overwhelmed by despair. A need to reconnect with your inner light.";
      symbolism = "The Star represents the soul's connection to the divine. The seven stars represent the seven chakras. The large star represents cosmic guidance. The water represents the unconscious and the flow of life. The nakedness represents vulnerability and truth.";
      imagery = "A naked woman kneels by a pool, pouring water from two pitchers — one on the land, one in the water. Above her, eight stars shine brightly, with one large central star. A bird sits on a tree nearby.";
    });
    cards.add("major-18-moon", {
      id = "major-18-moon"; name = "The Moon"; arcana = "Major"; suit = "Major"; number = 18;
      uprightMeaning = "Illusion, dreams, intuition, the unconscious, mystery. The Moon represents the realm of dreams, fears, and the unknown. A time of heightened intuition, but also of confusion and the need to navigate through illusion.";
      reversedMeaning = "Release of fear, clarity, truth revealed, overcoming confusion. The reversed Moon represents emerging from confusion, facing fears, and finding clarity. A time of dispelling illusions and seeing the truth.";
      symbolism = "The Moon represents the unconscious mind, dreams, and the realm of the unknown. The two towers represent the gateway to the unknown. The dog and wolf represent the tame and wild aspects of the mind. The crayfish represents the emerging unconscious. The drops represent the lunar influence.";
      imagery = "A full moon shines between two towers, with a face in the moon. A dog and a wolf howl at the moon. A crayfish emerges from a pool. Drops of dew fall from the moon. A winding path leads between the towers.";
    });
    cards.add("major-19-sun", {
      id = "major-19-sun"; name = "The Sun"; arcana = "Major"; suit = "Major"; number = 19;
      uprightMeaning = "Joy, success, vitality, positivity, abundance, clarity. The Sun represents the highest good, the light of truth, and the joy of being. A time of happiness, success, and the fullness of life.";
      reversedMeaning = "Temporary depression, lack of success, delayed joy, pessimism. The reversed Sun warns against a temporary clouding of joy, delays in success, or losing your optimism. A need to reconnect with your inner light.";
      symbolism = "The Sun represents the Self, the divine child, and the source of all life. The sun represents consciousness and illumination. The child represents innocence and joy. The white horse represents purity and power. The sunflowers represent the turning toward the light.";
      imagery = "A radiant sun shines in the sky with a smiling face. A naked child rides a white horse, holding a banner. Sunflowers bloom behind a wall. The child's hair is decorated with a wreath.";
    });
    cards.add("major-20-judgement", {
      id = "major-20-judgement"; name = "Judgement"; arcana = "Major"; suit = "Major"; number = 20;
      uprightMeaning = "Rebirth, inner calling, absolution, awakening, reckoning. Judgement represents the call to a higher purpose, the reckoning of past actions, and the opportunity for rebirth. A time of awakening and answering a higher calling.";
      reversedMeaning = "Self-doubt, avoiding the call, harsh judgement, refusal to learn. The reversed Judgement warns against ignoring your calling, being overly self-critical, or refusing to learn from the past. A need to heed the call and forgive yourself.";
      symbolism = "Judgement represents the awakening of the soul and the call to a higher life. The angel represents the divine messenger. The trumpet represents the call to awakening. The rising figures represent rebirth. The flag with a cross represents the triumph of the spirit.";
      imagery = "An angel blows a trumpet in the sky, surrounded by clouds. Below, three figures — a man, woman, and child — rise from their graves, arms outstretched. The angel holds a flag with a cross.";
    });
    cards.add("major-21-world", {
      id = "major-21-world"; name = "The World"; arcana = "Major"; suit = "Major"; number = 21;
      uprightMeaning = "Completion, fulfillment, wholeness, achievement, integration. The World represents the completion of a cycle, the achievement of a goal, and the integration of all experience. A time of fulfillment and the end of a journey.";
      reversedMeaning = "Incompletion, delays, lack of closure, seeking outside yourself. The reversed World warns against being close to completion but not quite there, or seeking fulfillment outside yourself. A need to complete the cycle and find wholeness within.";
      symbolism = "The World represents the completion of the Fool's journey — the soul has integrated all experience and achieved wholeness. The wreath represents the cycle of life. The four creatures represent the four elements and the fixed signs. The dancer represents the union of opposites. The two wands represent the dual nature of energy.";
      imagery = "A naked figure dances within a large wreath of green. She holds two wands. In the four corners, the same creatures as the Wheel of Fortune — a man, lion, ox, and eagle — watch from clouds.";
    });
  };

  /// Draw a tarot reading for the calling user.
  /// spreadType: e.g. "three-card", "celtic-cross", "single", "five-card"
  /// question: the seeker's question (may be empty for a general reading)
  /// Returns a TarotReading with randomly drawn cards and a synthesized interpretation.
  public func drawTarot(
    cards : Map.Map<Text, Types.TarotCard>,
    spreadType : Text,
    question : Text,
  ) : Types.TarotReading {
    let spread = getSpread(spreadType);

    // Collect all card ids into an array for random selection.
    let allCards = cards.entries().map(func((id, _) : (Text, Types.TarotCard)) : Text { id }).toArray();
    let totalCards = allCards.size();

    // Pseudo-random seed from the current time (nanoseconds).
    // We use a simple linear congruential generator (LCG) for deterministic
    // pseudo-random selection. This is sufficient for a tarot reading where
    // cryptographic randomness is not required.
    let seed = Int.abs(Time.now());
    var rngState = if (seed == 0) { 1 } else { seed % 2147483647 };
    if (rngState == 0) { rngState := 1 };

    func nextRandom() : Nat {
      // LCG: state = (state * 16807) mod 2147483647
      rngState := (rngState * 16807) % 2147483647;
      rngState
    };

    // Draw `cardCount` unique cards.
    // We pick random indices and skip already-drawn ones.
    // Use a List to track drawn ids for membership checks.
    let drawnIds : List.List<Text> = List.empty();
    var drawnCount = 0;
    var attempts = 0;
    let maxAttempts = spread.cardCount * 100;

    while (drawnCount < spread.cardCount and attempts < maxAttempts) {
      attempts := attempts + 1;
      let idx = nextRandom() % totalCards;
      let candidateId = allCards[idx];

      // Check if already drawn using List.contains.
      let alreadyDrawn = drawnIds.contains(candidateId);

      if (not alreadyDrawn) {
        drawnIds.add(candidateId);
        drawnCount := drawnCount + 1;
      };
    };

    // Snapshot the drawn ids into an immutable array for building the result.
    let drawnIdsArray = drawnIds.toArray();

    // Build the TarotDraw array with positions and random reversal.
    let draws = Array.tabulate(
      drawnCount,
      func(i : Nat) : Types.TarotDraw {
        let cardId = drawnIdsArray[i];
        let positionName = if (i < spread.positions.size()) {
          spread.positions[i]
        } else {
          "Position " # Nat.toText(i + 1)
        };
        // Random reversal: use the RNG to decide.
        let isReversed = (nextRandom() % 2) == 1;
        {
          cardId = cardId;
          position = i + 1;
          positionName = positionName;
          isReversed = isReversed;
        };
      }
    );

    // Synthesize a simple interpretation by listing the drawn cards and their meanings.
    let interpretationParts : List.List<Text> = List.empty();
    let guidanceParts : List.List<Text> = List.empty();
    for (draw in draws.values()) {
      switch (cards.get(draw.cardId)) {
        case (?card) {
          let meaning = if (draw.isReversed) { card.reversedMeaning } else { card.uprightMeaning };
          let orientation = if (draw.isReversed) { " (Reversed)" } else { "" };
          let part = draw.positionName # ": " # card.name # orientation # " — " # meaning;
          interpretationParts.add(part);
          // Guidance: use the opposite orientation's advice as guidance.
          let guidance = if (draw.isReversed) {
            card.uprightMeaning
          } else {
            card.reversedMeaning
          };
          guidanceParts.add("In the " # draw.positionName # ", " # card.name # " suggests: " # guidance);
        };
        case null {};
      };
    };

    let interpretation = interpretationParts.values().join("\n\n");
    let guidance = guidanceParts.values().join("\n\n");

    let now = Time.now();
    let readingId = "reading-" # now.toText();

    {
      id = readingId;
      principalId = ""; // The mixin sets this from the caller.
      spreadType = spreadType;
      question = question;
      draws = draws;
      interpretation = interpretation;
      guidance = guidance;
      readAt = now;
    }
  };
};
