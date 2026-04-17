import Image from "next/image";
import { BrandGuideIntro } from "@/components/brand/BrandGuideIntro";
import { ManifesteGallery } from "@/components/brand/ManifesteGallery";

const prose = "max-w-3xl text-base leading-relaxed text-blue-primary";
const h2 =
  "mb-4 mt-16 text-3xl font-semibold tracking-tight text-blue-primary first:mt-0 sm:text-4xl";
const h3 =
  "mb-3 mt-10 text-xl font-semibold tracking-tight text-blue-primary sm:text-2xl";

const MOODBOARD_SRC =
  "/brands/comptoir-sud-pacifique/moodboard-plateforme-marque.png";

function BrandPlatformMoodboard() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8"
      aria-labelledby="brand-platform-moodboard-title"
    >
      <p
        id="brand-platform-moodboard-title"
        className="mb-4 text-xs font-semibold tracking-[0.14em] text-blue-primary uppercase"
      >
        Moodboard
      </p>
      <figure className="m-0 overflow-hidden">
        <Image
          src={MOODBOARD_SRC}
          alt="Moodboard de direction artistique : paysages tropicaux, matières premières, eau et univers Comptoir Sud Pacifique."
          width={1024}
          height={724}
          className="h-auto w-full"
          priority
          sizes="(max-width: 600px) 100vw, 1152px"
        />
      </figure>
    </section>
  );
}

function ManifesteSection() {
  return (
    <section className="mx-auto mb-24 w-full max-w-6xl px-4 sm:px-8">
      <article className="bg-white">
        <header className="mb-10 border-b border-blue-primary/15 pb-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-blue-primary uppercase">
            Comptoir Sud Pacifique
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
            Manifeste
          </h2>
          <p className={`${prose} text-lg font-medium`}>
            Notre mission : offrir des voyages immobiles dans l&apos;espace et
            dans le temps, à travers des compositions olfactives évocatrices
            d&apos;un ailleurs, qu&apos;il soit exotique, nostalgique ou
            énigmatique.
          </p>
        </header>

        <h3 className={h2}>Avant-propos</h3>
        <p className={`${prose} mb-4`}>
          Ce document a pour but de transmettre, sans trop de contraintes ni
          règles parfaitement définies, la direction artistique générale de la
          marque. On y retrouve un peu une plateforme de marque, un manifeste
          artistique, une charte image… bref.
        </p>
        <p className={`${prose} mb-4`}>
          Le tout correspond à une capture d&apos;écran de ce que l&apos;on
          souhaite représenter avec Comptoir aujourd&apos;hui en 2026. Je vous
          souhaite une bonne lecture, et reste disponible si vous avez des
          questions.
        </p>
        <p className={prose}>
          <span className="font-semibold">Stéphane Guichard</span>
          <br />
          Directeur artistique
          <br />
          <a
            className="underline decoration-blue-primary/30 underline-offset-4 hover:decoration-blue-primary"
            href="mailto:stephane.guichard@comptoir-sud-pacifique.com"
          >
            stephane.guichard@comptoir-sud-pacifique.com
          </a>
        </p>

        <h3 className={h2}>Qui sommes-nous ?</h3>
        <p className={`${prose} mb-4`}>
          Comptoir Sud Pacifique est une marque née d&apos;un désir de voyage,
          d&apos;exotisme et d&apos;exploration. Ce sont d&apos;ailleurs ces
          valeurs qui définissent la Maison.
        </p>
        <p className={`${prose} mb-4`}>
          Il est également essentiel de souligner une autre valeur fondamentale
          : le désir d&apos;authenticité et de simplicité, où le naturel
          s&apos;allie à un luxe discret, sans ostentation. Comptoir Sud
          Pacifique, ce n&apos;est pas seulement une maison de parfum exotique,
          mais un cheminement sensoriel, un « voyage immobile ». Dans notre
          voyage, nous prenons plaisir à détailler chaque horizon, à nous
          imprégner des paysages, qu&apos;ils soient intérieurs ou extérieurs,
          et à nous laisser traverser par la beauté des rencontres.
        </p>
        <p className={`${prose} mb-4`}>
          Nos senteurs deviennent alors des carnets de route olfactifs : des
          fragments de souvenir, des instants suspendus, une exploration à la
          fois intime et universelle.
        </p>
        <p className={`${prose} mb-4`}>
          C&apos;est un périple anthropologique, où chaque note nous rapproche
          des matières premières, des cultures et des histoires humaines qui les
          façonnent.
        </p>
        <p className={`${prose} mb-4`}>
          Dans un quotidien à la cadence effrénée et saturé d&apos;impulsions
          permanentes, nous revendiquons le privilège de ralentir. Nous croyons
          qu&apos;il est possible de retrouver l&apos;espace pour se détendre,
          respirer, et explorer à hauteur d&apos;âme. C&apos;est notre
          définition du luxe : celui de se poser, d&apos;observer, et sentir le
          monde à un tempo humain.
        </p>
        <p className={prose}>
          Adhérer à Comptoir Sud Pacifique, c&apos;est cheminer sans valises,
          c&apos;est accepter d&apos;inviter le calme et la volupté dans son
          quotidien, c&apos;est affirmer à soi-même et aux autres qu&apos;on a
          le temps de vivre pleinement. Se laisser porter par nos fragrances,
          c&apos;est découvrir l&apos;exotisme du monde sans précipitations ni
          fard : simplement, sincèrement et avec gratitude.
        </p>

        <h3 className={h2}>L&apos;héritage de Comptoir Sud Pacifique</h3>
        <p className={`${prose} mb-4`}>
          Une Maison pionnière dans la parfumerie de niche, Comptoir Sud
          Pacifique depuis 1974 évoque l&apos;Ailleurs à travers des fragrances
          inspirées des confins du monde. À l&apos;origine de cette aventure, un
          couple épris de liberté. Séduits par les archipels envoûtants du Sud
          Pacifique et leurs senteurs enivrantes, ils décident de capturer cet
          éden dans des parfums, offrant ainsi à tous l&apos;expérience de
          voyages lointains.
        </p>
        <p className={`${prose} mb-4`}>
          Le flacon, inspiré des bouteilles servant au transport des essences
          aromatiques, devient iconique. Dès ses débuts, Comptoir Sud Pacifique
          sublime et transcende les matières premières nobles et précieuses de
          ces terres exotiques, les réinterprétant sans cesse.
        </p>
        <p className={prose}>
          Comptoir Sud Pacifique disposait, rue de la Paix, d&apos;une boutique
          où l&apos;on ne trouvait pas seulement des parfums, mais également
          toute une gamme de produits cosmétiques et textiles, tous unis par un
          même thème : l&apos;exploration et le bleu. On y découvrait de la
          maroquinerie doublée d&apos;un bleu azur, du prêt-à-porter inspiré des
          rivages lointains, des bougies aux senteurs marines, des crèmes aux
          notes exotiques… Cet espace se voulait un véritable cabinet de
          curiosités « bleues », reflétant l&apos;esprit des îles du Pacifique
          tout en conservant cette élégance parisienne qui fait la signature de
          la Maison.
        </p>

        <h3 className={h2}>Les codes de la marque</h3>
        <ul className="mb-8 grid gap-3 text-base text-blue-primary sm:grid-cols-2">
          {[
            "Le Bleu",
            "La Terre, le cuir fauve",
            "Le flacon en métal",
            "Le palmier",
          ].map((item) => (
            <li
              key={item}
              className="border border-blue-primary/10 bg-white px-4 py-3 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>

        <h3 className={h2}>Les piliers</h3>

        <h4 className={h3}>L&apos;évasion</h4>
        <p className={`${prose} mb-4`}>
          Le nom de Comptoir évoque instantanément le voyage et la mer. Il nous
          transporte vers des rivages lointains et exotiques, où des senteurs
          inconnues émergent, révélant des mondes nouveaux.
        </p>
        <p className={`${prose} mb-4`}>
          Plus largement, c&apos;est l&apos;exploration et l&apos;esprit
          d&apos;aventure qui caractérisent la marque. Une envie irrésistible de
          voyager, au sens propre comme au sens figuré. Dans l&apos;espace, avec
          la vanille comme ingrédient phare. Dans le passé, grâce aux nombreuses
          notes régressives qui façonnent la signature olfactive de la Maison.
        </p>

        <h4 className={h3}>L&apos;émotion</h4>
        <p className={`${prose} mb-4`}>
          Ces voyages, immobiles et instantanés, sont également porteurs
          d&apos;un éventail d&apos;émotions : la joie simple et réconfortante
          de se replonger dans un souvenir d&apos;enfance, la sérénité de
          s&apos;imaginer sur le sable blanc d&apos;une île sous le vent, la
          passion enflammée d&apos;une nuit cubaine…
        </p>
        <p className={prose}>
          Chaque parfum possède son déclencheur d&apos;émotion, unique pour
          chacun, qui élève l&apos;humeur et le bien-être. Des fragrances
          addictives, enveloppantes et inoubliables.
        </p>

        <h4 className={h3}>L&apos;abondance</h4>
        <p className={`${prose} mb-4`}>
          Dans cette définition de l&apos;évasion, l&apos;exotisme et le voyage
          deviennent synonymes d&apos;explosion de couleurs, qu&apos;il
          s&apos;agisse de la flore polynésienne, des temples indiens, des
          marchés animés d&apos;Istanbul ou des rues vibrantes de Cuba.
        </p>
        <p className={prose}>
          Une abondance qui se manifeste aussi dans les ingrédients,
          généreusement déployés dans chaque fragrance pour un sillage
          persistant. Des parfums enveloppants, immersifs, qui nous plongent
          dans des univers lointains et fascinants.
        </p>

        <h4 className={h3}>La sensorialité</h4>
        <p className={`${prose} mb-4`}>
          Les parfums de Comptoir éveillent les sens avec une intensité sans
          pareille. Chaque fragrance est une invitation à la volupté, à la
          sensualité.
        </p>
        <p className={prose}>
          Les notes olfactives caressent la peau, stimulent l&apos;imaginaire et
          éveillent des souvenirs enfouis. Les essences se mêlent
          harmonieusement, créant une symphonie olfactive qui transporte
          l&apos;esprit et enivre les sens. Ces parfums sensoriels transcendent
          le simple geste de se parfumer pour devenir une expérience immersive,
          une véritable exploration des sens, et offrent un moment de pur
          enchantement.
        </p>

        <h3 className={h2}>L&apos;univers visuel de Comptoir Sud Pacifique</h3>
        <p className={`${prose} mb-4`}>
          Dans les paragraphes suivants, nous explorons plusieurs notions et
          univers visuels. Vous y trouverez de nombreux exemples qui, souvent,
          ne s&apos;inscrivent pas directement dans le contexte de Comptoir Sud
          Pacifique. Ils permettent d&apos;illustrer certains propos mais ne
          suffisent pas à eux seuls à restituer pleinement l&apos;univers de la
          Maison.
        </p>
        <p className={`${prose} mb-4`}>
          Cet univers visuel se construit non pas autour d&apos;une seule idée
          ou d&apos;un seul exemple, mais par l&apos;alliance de toutes les
          notions présentées :
        </p>
        <ul className={`${prose} mb-6 list-disc space-y-2 pl-6`}>
          <li>Le minimalisme éditorial</li>
          <li>Les dessins</li>
          <li>Les lignes</li>
          <li>L&apos;univers postal</li>
          <li>La sensorialité</li>
          <li>La photographie de voyage</li>
        </ul>
        <p className={prose}>
          D&apos;autres influences peuvent également être empruntées dans
          l&apos;infinité de la créativité humaine, mais les éléments ci-dessous
          sont ceux qui, correctement associés, parviennent à transmettre
          l&apos;image de la Maison sans la trahir.
        </p>

        <h4 className={h3}>Minimalisme éditorial</h4>
        <p className={`${prose} mb-4`}>
          Les exemples présentés dans le document papier illustrent des mises en
          page qui mettent en valeur les espaces blancs. Ils sont fournis
          uniquement à titre d&apos;inspiration et doivent être dissociés de
          l&apos;univers de Comptoir Sud Pacifique lorsqu&apos;on les cite
          isolément.
        </p>
        <p className={`${prose} mb-4`}>
          L&apos;idée est de pouvoir associer une esthétique ultra-minimaliste à
          des éléments plus chaleureux : une touche de soleil, un effet « fait
          main », un soupçon de convivialité propre à l&apos;esprit Comptoir.
        </p>
        <p className={prose}>
          Cette sobriété structurée nous permet, à travers un design épuré,
          d&apos;affirmer notre sérieux et notre rigueur tout en laissant place
          à la créativité et à la chaleur humaine qui caractérisent la Maison.
        </p>
        <ManifesteGallery
          title="Références minimalisme éditorial"
          section="minimalisme"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/minimalisme/"
          placeholderCount={5}
        />

        <h4 className={h3}>Le dessin</h4>
        <p className={`${prose} mb-4`}>
          Pour Comptoir Sud Pacifique, l&apos;exploration se déploie aussi par
          le trait et la texture. Nous chérissons le grain d&apos;un papier
          crème, l&apos;effet collage d&apos;une photo dans un carnet de voyage,
          le caractère imparfait d&apos;un coup de crayon, la nuance granuleuse
          d&apos;un pastel, la trace humide d&apos;une aquarelle.
        </p>
        <p className={prose}>
          Ces références graphiques s&apos;inspirent de formes primitives, de
          traits naïfs, et d&apos;une sensibilité profondément humaine. Il ne
          s&apos;agit pas de rechercher le réalisme, mais bien de capturer
          l&apos;émotion et la poésie qui animent chaque ébauche.
        </p>
        <ManifesteGallery
          title="Références dessin"
          section="dessin"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/dessin/"
          placeholderCount={7}
        />

        <h4 className={h3}>La ligne et le chemin</h4>
        <p className={`${prose} mb-4`}>
          Le voyage, c&apos;est suivre un chemin. Un chemin, c&apos;est un
          trait, et un trait raconte mille histoires. Qu&apos;il soit trait de
          côte, croquis, schéma ou forme primitive, il est toujours porteur de
          sens. Le tremblement de la ligne révèle l&apos;humanité de son
          créateur, la texture de son support raconte son histoire.
        </p>
        <p className={`${prose} mb-4`}>
          Chez Comptoir Sud Pacifique, nous célébrons ce concept de «
          trait-chemin » : il fait passer un message sous la forme même
          d&apos;un voyage. Il peut servir à présenter les notes d&apos;une
          fragrance, à structurer les informations d&apos;un produit ou même à
          narrer l&apos;histoire de la Maison.
        </p>
        <p className={prose}>
          Sur des supports physiques, comme le packaging, le chemin devient une
          invitation : on fait pivoter l&apos;étui, on suit le tracé, et
          l&apos;on découvre pas à pas l&apos;univers vers lequel il nous guide.
        </p>
        <ManifesteGallery
          title="Références ligne et chemin"
          section="ligne-chemin"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/ligne-chemin/"
          placeholderCount={3}
        />

        <h4 className={h3}>Les lettres, l&apos;univers postal</h4>
        <p className={`${prose} mb-4`}>
          Comment passer à côté de l&apos;univers postal quand on est une marque
          de voyage ? La lettre, c&apos;est le récit du voyage, la transmission,
          l&apos;émotion. Objet graphique du voyage par excellence, elle permet
          de représenter, raconter, sans flash ni artifices. Lente et discrète,
          elle se mêle parfaitement à l&apos;univers de Comptoir.
        </p>
        <p className={`${prose} mb-4`}>
          Une lettre, ce n&apos;est pas une story Instagram, ou une photo sur un
          groupe WhatsApp. On prend le temps de la penser, de l&apos;écrire. On
          l&apos;envoie seulement à quelques personnes — ce n&apos;est pas pour
          un statut social qu&apos;on l&apos;écrit, mais pour faire une
          véritable attention à un être proche.
        </p>
        <p className={prose}>
          Des lettres, on retiendra quelques éléments élégants : les embossages,
          photographies de paysage, les dessins de timbre, cachets, et autres
          éléments typographiques liés à la lettre.
        </p>
        <ManifesteGallery
          title="Références univers postal"
          section="postal"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/postal/"
          placeholderCount={8}
        />

        <h4 className={h3}>Des images qui « sentent »</h4>
        <p className={`${prose} mb-4`}>
          Vendre un parfum, c&apos;est avant tout partager une émotion invisible
          ; comment la rendre perceptible quand elle ne peut se révéler
          qu&apos;au nez ? À l&apos;instar de la photographie culinaire, nous
          faisons appel aux sens et aux souvenirs pour inviter chacun à imaginer
          la profondeur olfactive de nos créations.
        </p>
        <p className={prose}>
          Plutôt que de montrer simplement le flacon, nous préférons diffuser
          des images qui éveillent la mémoire sensorielle : gros plans sur les
          matières premières — gousse de vanille, fleurs exotiques, bois fumé —,
          ou instants fugitifs qui sollicitent le toucher et l&apos;imaginaire.
          Une main effleurant l&apos;eau, une peau caressée par la brume, la
          douce chaleur d&apos;une pierre sur la joue, le vent jouant dans les
          cheveux : autant de saynètes visuelles qui suscitent en chacun
          l&apos;intuition des senteurs à venir.
        </p>
        <ManifesteGallery
          title="Références images qui « sentent »"
          section="sensorialite"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/sensorialite/"
          placeholderCount={7}
        />

        <h4 className={h3}>Le voyage et l&apos;exotisme, en images</h4>
        <p className={`${prose} mb-4`}>
          Une photographie de voyage, voire même une œuvre d&apos;art sur ce
          thème, a le pouvoir de nous transporter. Mais qu&apos;est-ce qui crée
          réellement ce sentiment d&apos;évasion dans l&apos;image ? Est-ce un
          palmier, une eau turquoise ? Une montagne immense dans l&apos;horizon
          ? On pourrait se dire que oui, ces éléments sont exotiques d&apos;un
          point de vue parisien, mais je suis convaincu que ce qui nous fait
          véritablement voyager n&apos;est pas l&apos;objet représenté lui-même
          mais plutôt ce qu&apos;il nous raconte et l&apos;idée que nous en
          formons.
        </p>
        <p className={`${prose} mb-4`}>
          Prenons par exemple une peinture : on peut distinguer une étendue de
          sable qui se fond dans la mer. Il n&apos;y a pas réellement
          d&apos;éléments exotiques, cela pourrait être n&apos;importe quelle
          plage. Pourtant, quand on la regarde, on ressent quelque chose. Le
          cadrage épuré nous invite à plonger le regard dans cet horizon infini
          — le voilier, à peine visible, suscite mille questions… où va-t-il ?
          Aborde-t-il une terre réelle ? Inconnue ? Où sont les hommes, les
          maisons, la vie ?
        </p>
        <p className={prose}>
          Cette scène, presque surréaliste, dégage également une profonde
          quiétude. Le bleu intense, la mer accueillante et paisible, dont
          l&apos;étendue se déroule tranquillement. C&apos;est ainsi qu&apos;une
          image se met à raconter, à questionner. « Qu&apos;est-ce que je fais
          ici ? » — et surtout : c&apos;est là-bas que je veux découvrir, et par
          la même occasion, peut-être, me découvrir moi-même.
        </p>
        <ManifesteGallery
          title="Références voyage et exotisme"
          section="voyage-exotisme"
          folderHint="/public/brands/comptoir-sud-pacifique/manifeste/voyage-exotisme/"
          placeholderCount={7}
        />
      </article>
    </section>
  );
}

export function BrandPlatformGuidePage() {
  return (
    <div className="bg-white text-blue-primary">
      <BrandGuideIntro
        title="Plateforme de marque"
        description={
          <>
            Cette page présente la vision de marque et le cadre de direction
            artistique de Comptoir Sud Pacifique. Elle formalise
            l&apos;intention, la posture et les principes qui orientent les
            choix créatifs.
          </>
        }
      />
      <BrandPlatformMoodboard />
      <ManifesteSection />
    </div>
  );
}
