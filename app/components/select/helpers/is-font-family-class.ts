import { FontFamiliesClasses, fontFamilyClasses } from '@/lib/types';

export function isFontFamilyClass(
	family?: string | FontFamiliesClasses,
): family is FontFamiliesClasses {
	return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
