DEBUG_TEMPLATE=template
PROD_TEMPLATE=template-min
VIDEO_LIST="videos.json"
PROCESSED_VIDEO_LIST="build/videos.json"
config="./jsduck.config"
guidesdir="./htmlguides"
outdir="./dist/titanium/3.0"

progname=$0

usage() {
    echo "Usage: $progname [options] [debug|prod]"
    echo ""
    echo "  Options:"
    echo "  -c <config_file> (i.e., jsduck_21.config for 2.1 docs build)."
    echo "  -o <optional_project> (currently 'alloy' and 'modules' are supported)"
    echo "  -d <output_dir> (defaults to dist/titanium/3.0)."
    echo "  -s  Enable --seo flag to jsduck."
    echo ""
}

while getopts ":tso:c:d:g:" opt; do
    case $opt in 
        c)
            if [ "$OPTARG" ]; then
                config=$OPTARG
            fi
            ;;
        d)
            if [ "$OPTARG" ]; then
                outdir=$OPTARG
            fi
            ;;
        o)
            if [ $OPTARG == "alloy" ]; then
                include_alloy="include_alloy"
            elif [ $OPTARG = "modules" ]; then 
                include_modules="include_modules" 
            else
                echo "Unknown optional project, $OPTARG">&2
                usage
                exit 1
            fi
            ;;
        g)
            if [ "$OPTARG" ]; then
                guidesdir=$OPTARG
            fi
            ;;
        s)  
            seo="--seo"
            ;;
        \?) 
             echo "Invalid option: -$OPTARG">&2
             usage
             exit 1
             ;;
        :)
             echo "Option -$OPTARG requires an argument." >&2
             usage
             exit 1
             ;;
    esac
done

# Skip the options and move on to the positional parameters
shift $((OPTIND-1))


while [ $1 ]; do
    if [ $1 == "prod" ]; then
        production_build="production"
        seo="--seo"
        no_thumbnails=""
    elif [ $1 == "debug" ]; then
        debug_build="debug"
    fi
    shift
done

if [ ! "$TI_DOCS" ]; then
    if [ "$TI_ROOT" ]; then
        TI_DOCS=${TI_ROOT}/titanium_mobile/apidoc
    else
        echo "No doc root \$TI_DOCS and \$TI_ROOT not defined. Exiting."
        exit 1
    fi
fi
if [ ! "$JSDUCK" ]; then
    if [ "$TI_ROOT" ]; then
        JSDUCK=${TI_ROOT}/jsduck
    else
        echo "No JSDuck dir \$JSDUCK and \$TI_ROOT not defined. Exiting."
        exit 1
    fi
fi

if [ ! "$DOCTOOLS" ]; then
    if [ "$TI_ROOT" ]; then
        DOCTOOLS=${TI_ROOT}/doctools
    else
        echo "No doctools dir \$DOCTOOLS and \$TI_ROOT not defined. Exiting."
        exit 1
    fi
fi

if [ ! "$ALLOY" ]; then
    if [ "$TI_ROOT" ]; then
        ALLOY=${TI_ROOT}/alloy
    else
        echo "No alloy dir \$ALLOY and \$TI_ROOT not defined. Exiting."
        exit 1
    fi
fi

if [ $include_alloy ]; then
    alloyDirs="${ALLOY}/alloy/builtins ${ALLOY}/alloy/lib ${ALLOY}/docs/apidoc"
    for D in $ALLOY/widgets/*; do
        if [[ -d $D ]]; then
            alloyDirs+=" $D/controllers/"
        fi
    done
fi

if [ $include_modules ]; then
    if [ ! "$TI_MODULES" ]; then
        if [ "$TI_ROOT" ]; then
            TI_MODULES=${TI_ROOT}/titanium_modules
        else
            echo "No titanium_modules dir \$TI_MODULES and \$TI_ROOT not defined. Exiting."
            exit 1
        fi
    fi
    if [ ! "$APPC_MODULES" ]; then
        if [ "$TI_ROOT" ]; then
            APPC_MODULES=${TI_ROOT}/appc_modules
        else
            echo "No titanium_modules dir \$TI_MODULES and \$TI_ROOT not defined. Exiting."
            exit 1
        fi
    fi
    if [ ! "$TIZEN_MODULE" ]; then
        if [ "$TI_ROOT" ]; then
            TIZEN_MODULE=${TI_ROOT}/titanium_mobile_tizen/modules/tizen/apidoc
        else
            echo "No titanium_mobile_tizen dir \$TIZEN_MODULE and \$TI_ROOT not defined. Exiting."
            exit 1
        fi
    fi
    module_dirs="$TI_MODULES/map/mobile/apidoc $TI_MODULES/facebook/mobile/apidoc $APPC_MODULES/ti.nfc/apidoc $APPC_MODULES/newsstand $TIZEN_MODULE"
fi

python ${TI_DOCS}/docgen.py -f jsduck -o ./build $module_dirs
python ./guides_parser.py --input "${guidesdir}/toc.xml" --output "./build/guides"

# Assume video list is pre-processed, with real thumbnails 
cp $VIDEO_LIST $PROCESSED_VIDEO_LIST
# After updating video list, add thumbnails manually using the video_thumbs command: 
#    python ./video_thumbs.py --input $VIDEO_LIST --output $PROCESSED_VIDEO_LIST

if [ $production_build ] ; then
    (cd ${JSDUCK}; rake compress)
    TEMPLATE=${JSDUCK}/${PROD_TEMPLATE}
else
    compass compile ${JSDUCK}/template/resources/sass
    TEMPLATE=${JSDUCK}/${DEBUG_TEMPLATE}
fi

ruby ${JSDUCK}/bin/jsduck --template ${TEMPLATE} $seo --output $outdir --config $config $alloyDirs
cp -r $guidesdir/images "$outdir/images"
cp -r $guidesdir/attachments "$outdir/attachments"
cp -r $guidesdir/css/common.css "$outdir/resources/css/common.css"
cp ./resources/mock_video.png $outdir/resources/images/mock_video.png
cp ./resources/codestrong_logo_short.png $outdir/resources/images/codestrong_logo_short.png
