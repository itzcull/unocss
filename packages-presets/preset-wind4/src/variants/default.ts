import type { Variant } from '@unocss/core'
import type { PresetWind4Options } from '..'
import type { Theme } from '../theme'
import { variantAria, variantTaggedAriaAttributes } from './aria'
import { variantBreakpoints } from './breakpoints'
import { variantChildren } from './children'
import { variantCombinators, variantSvgCombinators } from './combinators'
import { variantContainerQuery } from './container'
import { variantColorsMediaOrClass, variantColorsScheme } from './dark'
import { variantDataAttribute, variantTaggedDataAttributes } from './data'
import { variantLanguageDirections } from './directions'
import { variantImportant } from './important'
import { variantContrasts, variantCustomMedia, variantForcedColors, variantMotions, variantNoscript, variantOrientations, variantPrint, variantScripting } from './media'
import {
  variantCssLayer,
  variantImplicitGroup,
  variantInternalLayer,
  variantScope,
  variantSelector,
  variantStickyHover,
  variantTheme,
  variantVariables,
} from './misc'
import { variantNegative } from './negative'
import { placeholderModifier } from './placeholder'
import { variantPartClasses, variantPseudoClassesAndElements, variantPseudoClassFunctions, variantTaggedPseudoClasses } from './pseudo'
import { variantStartingStyle } from './startingstyle'
import { variantSupports } from './supports'

export function variants(options: PresetWind4Options): Variant<Theme>[] {
  return [
    variantAria,
    variantDataAttribute,
    variantCssLayer,

    variantSelector,
    variantInternalLayer,
    variantNegative,
    variantStartingStyle,
    variantImportant(),
    variantSupports,
    variantNoscript,
    variantScripting,
    variantPrint,
    variantCustomMedia,
    ...variantContrasts,
    ...variantMotions,
    ...variantOrientations,
    ...variantForcedColors,
    variantBreakpoints(),
    ...variantCombinators,
    ...variantSvgCombinators,

    placeholderModifier,
    ...variantPseudoClassesAndElements(),
    variantPseudoClassFunctions(),
    ...variantTaggedPseudoClasses(options),

    variantPartClasses,
    ...variantColorsMediaOrClass(options),
    ...variantColorsScheme,
    ...variantLanguageDirections,
    variantScope,
    ...variantChildren,

    variantContainerQuery,
    variantVariables,
    ...variantTaggedDataAttributes,
    ...variantTaggedAriaAttributes,

    variantTheme,

    // variantSpaceAndDivide,
    ...variantStickyHover,
    variantImplicitGroup,
  ].flat()
}
