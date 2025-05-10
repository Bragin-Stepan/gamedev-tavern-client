import { BiLogoBlender } from 'react-icons/bi'
import { BsFillMouse3Fill } from 'react-icons/bs'
import { CgFigma } from 'react-icons/cg'
import { FaArtstation, FaUnity } from 'react-icons/fa'
import { FaDeviantart } from 'react-icons/fa'
import { FaDiceD20 } from 'react-icons/fa'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { GiFoldedPaper } from 'react-icons/gi'
import { GiCardRandom } from 'react-icons/gi'
import { GiTwoCoins } from 'react-icons/gi'
import { Gi3dMeeple } from 'react-icons/gi'
import { GiAxeSword } from 'react-icons/gi'
import { GiRollingDices } from 'react-icons/gi'
import { GiDiceFire } from 'react-icons/gi'
import { IoGameController } from 'react-icons/io5'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { SiCocos, SiGodotengine, SiUnrealengine } from 'react-icons/si'
import { SiSpine } from 'react-icons/si'
import { SiGamemaker } from 'react-icons/si'
import { SiConstruct3 } from 'react-icons/si'
import { SiAdobeaudition } from 'react-icons/si'
import { SiAdobepremierepro } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobeaftereffects } from 'react-icons/si'
import { SiMiro } from 'react-icons/si'
import { SiNotion } from 'react-icons/si'

import { IconName } from './icon.type'

export const iconsOption = [
	{
		value: 'unity' as IconName,
		label: 'Unity',
		icon: FaUnity
	},
	{
		value: 'unreal' as IconName,
		label: 'Unreal Engine',
		icon: SiUnrealengine
	},
	{
		value: 'godot' as IconName,
		label: 'Godot',
		icon: SiGodotengine
	},
	{
		value: 'cocos' as IconName,
		label: 'Cocos',
		icon: SiCocos
	},
	{
		value: 'figma' as IconName,
		label: 'Figma',
		icon: CgFigma
	},
	{
		value: 'artstation' as IconName,
		label: 'ArtStation',
		icon: FaArtstation
	},
	{
		value: 'spine' as IconName,
		label: 'Spine',
		icon: SiSpine
	},
	{
		value: 'gamemaker' as IconName,
		label: 'GameMaker',
		icon: SiGamemaker
	},
	{
		value: 'construct' as IconName,
		label: 'Construct',
		icon: SiConstruct3
	},
	{
		value: 'deviantart' as IconName,
		label: 'DeviantArt',
		icon: FaDeviantart
	},
	{
		value: 'blender' as IconName,
		label: 'Blender',
		icon: BiLogoBlender
	},
	{
		value: 'adobeaudition' as IconName,
		label: 'Adobe Audition',
		icon: SiAdobeaudition
	},
	{
		value: 'adobepremierepro' as IconName,
		label: 'Adobe Premiere Pro',
		icon: SiAdobepremierepro
	},
	{
		value: 'adobephotoshop' as IconName,
		label: 'Adobe Photoshop',
		icon: SiAdobephotoshop
	},
	{
		value: 'adobeillustrator' as IconName,
		label: 'Adobe Illustrator',
		icon: SiAdobeillustrator
	},
	{
		value: 'adobeaftereffects' as IconName,
		label: 'Adobe After Effects',
		icon: SiAdobeaftereffects
	},
	{
		value: 'miro' as IconName,
		label: 'Miro',
		icon: SiMiro
	},
	{
		value: 'notion' as IconName,
		label: 'Notion',
		icon: SiNotion
	},
	{
		value: 'paper' as IconName,
		label: 'Листки бумаги',
		icon: GiFoldedPaper
	},
	{
		value: 'excel' as IconName,
		label: 'Excel',
		icon: RiFileExcel2Fill
	},
	{
		value: 'cards' as IconName,
		label: 'Карты',
		icon: GiCardRandom
	},
	{
		value: 'coins' as IconName,
		label: 'Монеты',
		icon: GiTwoCoins
	},
	{
		value: 'meeple' as IconName,
		label: 'Meeple',
		icon: Gi3dMeeple
	},
	{
		value: 'microphone' as IconName,
		label: 'Микрофон',
		icon: FaMicrophoneAlt
	},
	{
		value: 'axe' as IconName,
		label: 'Топор',
		icon: GiAxeSword
	},
	{
		value: 'gameController' as IconName,
		label: 'Контроллер',
		icon: IoGameController
	},
	{
		value: 'diceFire' as IconName,
		label: 'Кость в огне',
		icon: GiDiceFire
	},
	{
		value: 'dices' as IconName,
		label: 'Кости',
		icon: GiRollingDices
	},
	{
		value: 'diceD20' as IconName,
		label: 'Кости D20',
		icon: FaDiceD20
	},
	{
		value: 'mouse' as IconName,
		label: 'Мышка',
		icon: BsFillMouse3Fill
	}
] satisfies Array<{
	value: string
	label: string
	icon: React.ComponentType<{ className?: string }>
}>
