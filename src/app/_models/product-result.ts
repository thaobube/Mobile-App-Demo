export interface ProductResult {
    code: string;
    product: Product;
    status: number;
    status_verbose: string;
  }
  
  interface Product {
    _id: string;
    _keywords: string[];
    additives_debug_tags: any[];
    additives_n: number;
    additives_old_n: number;
    additives_old_tags: any[];
    additives_original_tags: any[];
    additives_prev_original_tags: any[];
    additives_tags: any[];
    allergens: string;
    allergens_debug_tags: any[];
    allergens_from_ingredients: string;
    allergens_from_user: string;
    allergens_hierarchy: any[];
    allergens_tags: any[];
    amino_acids_prev_tags: any[];
    amino_acids_tags: any[];
    brands: string;
    brands_debug_tags: any[];
    brands_tags: string[];
    categories: string;
    categories_hierarchy: string[];
    categories_lc: string;
    categories_old: string;
    categories_properties: Categoriesproperties;
    categories_properties_tags: string[];
    categories_tags: string[];
    category_properties: Categoryproperties;
    checkers_tags: any[];
    ciqual_food_name_tags: string[];
    cities_tags: any[];
    code: string;
    codes_tags: string[];
    compared_to_category: string;
    complete: number;
    completeness: number;
    correctors_tags: string[];
    countries: string;
    countries_debug_tags: any[];
    countries_hierarchy: string[];
    countries_lc: string;
    countries_tags: string[];
    created_t: number;
    creator: string;
    data_quality_bugs_tags: any[];
    data_quality_errors_tags: any[];
    data_quality_info_tags: string[];
    data_quality_tags: string[];
    data_quality_warnings_tags: any[];
    data_sources: string;
    data_sources_tags: string[];
    debug_param_sorted_langs: string[];
    downgraded: string;
    ecoscore_data: Ecoscoredata;
    ecoscore_grade: string;
    ecoscore_score: number;
    ecoscore_tags: string[];
    editors_tags: string[];
    emb_codes: string;
    emb_codes_debug_tags: any[];
    emb_codes_orig: string;
    emb_codes_tags: any[];
    entry_dates_tags: string[];
    expiration_date: string;
    expiration_date_debug_tags: any[];
    generic_name: string;
    generic_name_fr: string;
    generic_name_fr_debug_tags: any[];
    id: string;
    image_front_small_url: string;
    image_front_thumb_url: string;
    image_front_url: string;
    image_ingredients_small_url: string;
    image_ingredients_thumb_url: string;
    image_ingredients_url: string;
    image_nutrition_small_url: string;
    image_nutrition_thumb_url: string;
    image_nutrition_url: string;
    image_small_url: string;
    image_thumb_url: string;
    image_url: string;
    images: Images;
    informers_tags: string[];
    ingredients: Ingredient[];
    ingredients_analysis_tags: string[];
    ingredients_debug: string[];
    ingredients_from_or_that_may_be_from_palm_oil_n: number;
    ingredients_from_palm_oil_n: number;
    ingredients_from_palm_oil_tags: any[];
    ingredients_hierarchy: string[];
    ingredients_ids_debug: string[];
    ingredients_n: number;
    ingredients_n_tags: string[];
    ingredients_original_tags: string[];
    ingredients_percent_analysis: number;
    ingredients_tags: string[];
    ingredients_text: string;
    ingredients_text_debug: string;
    ingredients_text_debug_tags: any[];
    ingredients_text_fr: string;
    ingredients_text_fr_debug_tags: any[];
    ingredients_text_with_allergens: string;
    ingredients_text_with_allergens_fr: string;
    ingredients_that_may_be_from_palm_oil_n: number;
    ingredients_that_may_be_from_palm_oil_tags: any[];
    interface_version_created: string;
    interface_version_modified: string;
    known_ingredients_n: number;
    labels: string;
    labels_hierarchy: any[];
    labels_lc: string;
    labels_prev_hierarchy: any[];
    labels_prev_tags: any[];
    labels_tags: any[];
    lang: string;
    lang_debug_tags: any[];
    languages: Languages;
    languages_codes: Languagescodes;
    languages_hierarchy: string[];
    languages_tags: string[];
    last_edit_dates_tags: string[];
    last_editor: string;
    last_image_dates_tags: string[];
    last_image_t: number;
    last_modified_by: string;
    last_modified_t: number;
    lc: string;
    link: string;
    link_debug_tags: any[];
    manufacturing_places: string;
    manufacturing_places_debug_tags: any[];
    manufacturing_places_tags: any[];
    max_imgid: string;
    minerals_prev_tags: any[];
    minerals_tags: any[];
    misc_tags: string[];
    no_nutrition_data: string;
    nova_group: number;
    nova_group_debug: string;
    nova_group_tags: string[];
    nova_groups: string;
    nova_groups_tags: string[];
    nucleotides_prev_tags: any[];
    nucleotides_tags: any[];
    nutrient_levels: Nutrientlevels;
    nutrient_levels_tags: string[];
    nutriments: Nutriments;
    nutriscore_data: Nutriscoredata;
    nutriscore_grade: string;
    nutriscore_score: number;
    nutriscore_score_opposite: number;
    nutrition_data: string;
    nutrition_data_per: string;
    nutrition_data_per_debug_tags: any[];
    nutrition_data_prepared: string;
    nutrition_data_prepared_per: string;
    nutrition_data_prepared_per_debug_tags: any[];
    nutrition_grade_fr: string;
    nutrition_grades: string;
    nutrition_grades_tags: string[];
    nutrition_score_beverage: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
    nutrition_score_warning_no_fiber: number;
    origins: string;
    origins_hierarchy: any[];
    origins_lc: string;
    origins_old: string;
    origins_tags: any[];
    other_nutritional_substances_tags: any[];
    packaging: string;
    packaging_debug_tags: any[];
    packaging_tags: any[];
    packagings: Packaging3[];
    photographers_tags: string[];
    pnns_groups_1: string;
    pnns_groups_1_tags: string[];
    pnns_groups_2: string;
    pnns_groups_2_tags: string[];
    popularity_key: number;
    popularity_tags: string[];
    product_name: string;
    product_name_debug_tags: any[];
    product_name_fr: string;
    product_name_fr_debug_tags: any[];
    product_quantity: number;
    purchase_places: string;
    purchase_places_debug_tags: any[];
    purchase_places_tags: any[];
    quantity: string;
    quantity_debug_tags: any[];
    rev: number;
    scans_n: number;
    selected_images: Selectedimages;
    serving_quantity: number;
    serving_size: string;
    serving_size_debug_tags: any[];
    sortkey: number;
    states: string;
    states_hierarchy: string[];
    states_tags: string[];
    stores: string;
    stores_debug_tags: any[];
    stores_tags: string[];
    traces: string;
    traces_debug_tags: any[];
    traces_from_ingredients: string;
    traces_from_user: string;
    traces_hierarchy: any[];
    traces_tags: any[];
    unique_scans_n: number;
    unknown_ingredients_n: number;
    unknown_nutrients_tags: any[];
    update_key: string;
    vitamins_prev_tags: any[];
    vitamins_tags: any[];
  }
  
  interface Selectedimages {
    front: Front;
    ingredients: Front;
    nutrition: Front;
  }
  
  interface Front {
    display: Display;
    small: Display;
    thumb: Display;
  }
  
  interface Display {
    fr: string;
  }
  
  interface Packaging3 {
    material: string;
    shape: string;
  }
  
  interface Nutriscoredata {
    energy: number;
    energy_points: number;
    energy_value: number;
    fiber: number;
    fiber_points: number;
    fiber_value: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
    grade: string;
    is_beverage: number;
    is_cheese: number;
    is_fat: number;
    is_water: number;
    negative_points: number;
    positive_points: number;
    proteins: number;
    proteins_points: number;
    proteins_value: number;
    saturated_fat: number;
    saturated_fat_points: number;
    saturated_fat_ratio: number;
    saturated_fat_ratio_points: number;
    saturated_fat_ratio_value: number;
    saturated_fat_value: number;
    score: number;
    sodium: number;
    sodium_points: number;
    sodium_value: number;
    sugars: number;
    sugars_points: number;
    sugars_value: number;
  }
  
  interface Nutriments {
    carbohydrates: number;
    carbohydrates_100g: number;
    carbohydrates_serving: number;
    carbohydrates_unit: string;
    carbohydrates_value: number;
    energy: number;
    'energy-kcal': number;
    'energy-kcal_100g': number;
    'energy-kcal_serving': number;
    'energy-kcal_unit': string;
    'energy-kcal_value': number;
    energy_100g: number;
    energy_serving: number;
    energy_unit: string;
    energy_value: number;
    fat: number;
    fat_100g: number;
    fat_serving: number;
    fat_unit: string;
    fat_value: number;
    'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
    'nova-group': number;
    'nova-group_100g': number;
    'nova-group_serving': number;
    'nutrition-score-fr': number;
    'nutrition-score-fr_100g': number;
    proteins: number;
    proteins_100g: number;
    proteins_serving: number;
    proteins_unit: string;
    proteins_value: number;
    salt: number;
    salt_100g: number;
    salt_serving: number;
    salt_unit: string;
    salt_value: number;
    'saturated-fat': number;
    'saturated-fat_100g': number;
    'saturated-fat_serving': number;
    'saturated-fat_unit': string;
    'saturated-fat_value': number;
    sodium: number;
    sodium_100g: number;
    sodium_serving: number;
    sodium_unit: string;
    sodium_value: number;
    sugars: number;
    sugars_100g: number;
    sugars_serving: number;
    sugars_unit: string;
    sugars_value: number;
  }
  
  interface Nutrientlevels {
    fat: string;
    salt: string;
    'saturated-fat': string;
    sugars: string;
  }
  
  interface Languagescodes {
    fr: number;
  }
  
  interface Languages {
    'en:french': number;
  }
  
  interface Ingredient {
    id: string;
    percent_estimate: number;
    percent_max: number;
    percent_min: number;
    rank: number;
    text: string;
    vegan: string;
    vegetarian: string;
  }
  
  interface Images {
    '1': _1;
    '2': _1;
    '3': _1;
    '4': _4;
    '5': _4;
    '6': _4;
    '7': _4;
    '8': _4;
    front_fr: Frontfr;
    ingredients_fr: Ingredientsfr;
    nutrition_fr: Nutritionfr;
  }
  
  interface Nutritionfr {
    angle: number;
    geometry: string;
    imgid: string;
    normalize?: any;
    ocr: number;
    orientation: string;
    rev: string;
    sizes: Sizes2;
    white_magic?: any;
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  }
  
  interface Ingredientsfr {
    angle?: any;
    geometry: string;
    imgid: string;
    normalize: string;
    ocr: number;
    orientation?: any;
    rev: string;
    sizes: Sizes2;
    white_magic: string;
    x1?: any;
    x2?: any;
    y1?: any;
    y2?: any;
  }
  
  interface Frontfr {
    angle: number;
    geometry: string;
    imgid: string;
    normalize?: any;
    rev: string;
    sizes: Sizes2;
    white_magic?: any;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }
  
  interface Sizes2 {
    '100': _100;
    '200': _100;
    '400': _100;
    full: _100;
  }
  
  interface _4 {
    sizes: Sizes;
    uploaded_t: number;
    uploader: string;
  }
  
  interface _1 {
    sizes: Sizes;
    uploaded_t: string;
    uploader: string;
  }
  
  interface Sizes {
    '100': _100;
    '400': _100;
    full: _100;
  }
  
  interface _100 {
    h: number;
    w: number;
  }
  
  interface Ecoscoredata {
    adjustments: Adjustments;
    agribalyse: Agribalyse;
    grade: string;
    grade_be: string;
    grade_ch: string;
    grade_de: string;
    grade_es: string;
    grade_fr: string;
    grade_ie: string;
    grade_it: string;
    grade_lu: string;
    grade_nl: string;
    missing: Missing;
    missing_data_warning: number;
    score: number;
    score_be: number;
    score_ch: number;
    score_de: number;
    score_es: number;
    score_fr: number;
    score_ie: number;
    score_it: number;
    score_lu: number;
    score_nl: number;
    status: string;
  }
  
  interface Missing {
    labels: number;
    origins: number;
    packagings: number;
  }
  
  interface Agribalyse {
    agribalyse_food_code: string;
    agribalyse_proxy_food_code: string;
    co2_agriculture: string;
    co2_consumption: string;
    co2_distribution: string;
    co2_packaging: string;
    co2_processing: string;
    co2_total: string;
    co2_transportation: string;
    code: string;
    dqr: string;
    ef_agriculture: string;
    ef_consumption: string;
    ef_distribution: string;
    ef_packaging: string;
    ef_processing: string;
    ef_total: string;
    ef_transportation: string;
    is_beverage: number;
    name_en: string;
    name_fr: string;
    score: number;
  }
  
  interface Adjustments {
    origins_of_ingredients: Originsofingredients;
    packaging: Packaging2;
    production_system: Productionsystem;
    threatened_species: Threatenedspecies;
  }
  
  interface Threatenedspecies {
  }
  
  interface Productionsystem {
    warning: string;
  }
  
  interface Packaging2 {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings: Packaging[];
    score: number;
    value: number;
    warning: string;
  }
  
  interface Packaging {
    ecoscore_material_score: number;
    ecoscore_shape_ratio: number;
    material: string;
    non_recyclable_and_non_biodegradable: string;
    shape: string;
  }
  
  interface Originsofingredients {
    aggregated_origins: Aggregatedorigin[];
    epi_score: number;
    epi_value: number;
    origins_from_origins_field: string[];
    transportation_score_be: number;
    transportation_score_ch: number;
    transportation_score_de: number;
    transportation_score_es: number;
    transportation_score_fr: number;
    transportation_score_ie: number;
    transportation_score_it: number;
    transportation_score_lu: number;
    transportation_score_nl: number;
    transportation_value_be: number;
    transportation_value_ch: number;
    transportation_value_de: number;
    transportation_value_es: number;
    transportation_value_fr: number;
    transportation_value_ie: number;
    transportation_value_it: number;
    transportation_value_lu: number;
    transportation_value_nl: number;
    value_be: number;
    value_ch: number;
    value_de: number;
    value_es: number;
    value_fr: number;
    value_ie: number;
    value_it: number;
    value_lu: number;
    value_nl: number;
    warning: string;
  }
  
  interface Aggregatedorigin {
    origin: string;
    percent: number;
  }
  
  interface Categoryproperties {
    'ciqual_food_name:en': string;
    'ciqual_food_name:fr': string;
  }
  
  interface Categoriesproperties {
    'agribalyse_food_code:en': string;
    'agribalyse_proxy_food_code:en': string;
    'ciqual_food_code:en': string;
  }