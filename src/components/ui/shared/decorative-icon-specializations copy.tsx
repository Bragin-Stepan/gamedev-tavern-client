import React from 'react'
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
import { type ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

type IconName =
	| 'unity'
	| 'unreal'
	| 'godot'
	| 'cocos'
	| 'figma'
	| 'artstation'
	| 'spine'
	| 'gamemaker'
	| 'construct'
	| 'deviantart'
	| 'blender'
	| 'adobeaudition'
	| 'adobepremierepro'
	| 'adobephotoshop'
	| 'adobeillustrator'
	| 'adobeaftereffects'
	| 'miro'
	| 'notion'
	| 'paper'
	| 'excel'
	| 'cards'
	| 'coins'
	| 'meeple'
	| 'axe'
	| 'gameController'
	| 'mouse'
	| 'microphone'
	| 'dices'
	| 'diceFire'
	| 'diceD20'

interface DecorativeIconSpecializationProps {
	name: IconName
	className?: ClassNameValue
}

const iconMap = {
	unity: FaUnity,
	unreal: SiUnrealengine,
	godot: SiGodotengine,
	cocos: SiCocos,
	figma: CgFigma,
	artstation: FaArtstation,
	spine: SiSpine,
	gamemaker: SiGamemaker,
	construct: SiConstruct3,
	deviantart: FaDeviantart,
	blender: BiLogoBlender,
	adobeaudition: SiAdobeaudition,
	adobepremierepro: SiAdobepremierepro,
	adobephotoshop: SiAdobephotoshop,
	adobeillustrator: SiAdobeillustrator,
	adobeaftereffects: SiAdobeaftereffects,
	miro: SiMiro,
	notion: SiNotion,
	paper: GiFoldedPaper,
	excel: RiFileExcel2Fill,
	cards: GiCardRandom,
	coins: GiTwoCoins,
	meeple: Gi3dMeeple,
	dices: GiRollingDices,
	diceFire: GiDiceFire,
	diceD20: FaDiceD20,
	axe: GiAxeSword,
	gameController: IoGameController,
	mouse: BsFillMouse3Fill,
	microphone: FaMicrophoneAlt
} satisfies Record<IconName, React.ComponentType<{ className?: string }>>

export const DecorativeIconSpecialization = ({
	name,
	className
}: DecorativeIconSpecializationProps) => {
	const IconComponent = iconMap[name]

	if (!IconComponent) return null

	return <IconComponent className={cn(className)} />
}
